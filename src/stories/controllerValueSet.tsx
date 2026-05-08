// src/stories/controllerValueSet.tsx
import { useEffect, useRef, useState } from 'react';
import './controllerValueSet.css';

export interface ControllerValueSetProps {
  header?: boolean;
  lightMode?: boolean;
  onChangeValue?: (value: number) => void;
}

const MIN = 0;
const MAX = 100;

const clamp = (n: number, min = MIN, max = MAX) => Math.min(max, Math.max(min, n));

export const ControllerValueSet = ({
  header = true,
  lightMode = false, 
  onChangeValue,

}: ControllerValueSetProps) => {
  const [value, setValue] = useState<number>(50);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);

  const rootClassName = [
    'storybook-controller-value-set',
    lightMode ? '' : 'dark',
  ]
    .filter(Boolean)
    .join(' ');

  const updateFromClientX = (clientX: number) => {
    const track = trackRef.current;
    if (!track) return;

    const rect = track.getBoundingClientRect();
    const ratio = (clientX - rect.left) / rect.width;
    const nextValue = clamp(Math.round(ratio * 100));
    setValue(nextValue);
  };

  const onHolderMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    isDraggingRef.current = true;
    updateFromClientX(e.clientX);
  };

  const onTrackMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    isDraggingRef.current = true;
    updateFromClientX(e.clientX);
  };

  const onWheel = (e: React.WheelEvent<HTMLElement>) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 1 : -1;
    setValue((prev) => clamp(prev + delta));
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      updateFromClientX(e.clientX);
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  useEffect(() => {
    console.log('[ControllerValueSet] value:', value);
    onChangeValue?.(value);
  }, [value, onChangeValue]);

  const sliderWidth = value === 0 ? '8px' : `${value}%`;

  return (
    <article className={rootClassName} onWheel={onWheel}>
      {header && (
        <div className="storybook-controller-value-set__header">
          <div className="storybook-controller-value-set__title">Parameter</div>
          <div className="storybook-controller-value-set__value">{value}</div>
        </div>
      )}

      <div
        className="storybook-controller-value-set__track"
        ref={trackRef}
        onMouseDown={onTrackMouseDown}
      >
        <div className="storybook-controller-value-set__fill" style={{ width: sliderWidth }}>
          <div
            className="storybook-controller-value-set__holder-frame"
            onMouseDown={onHolderMouseDown}
          >
            <div className="storybook-controller-value-set__holder" />
          </div>
        </div>
      </div>
    </article>
  );
};