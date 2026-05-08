// src/stories/Button.tsx
import './button.css';
import calendarIcon from '../assets/calendar-icon.svg';

interface ButtonProps {
  title?: string;
  variants?: 'Default' | 'Neutral' | 'Outline';
  state?: 'Default' | 'Hover';
  icon?: boolean;
  position?: 'Left' | 'Right';
  instance?: React.ReactNode | null;
  onClick?: () => void;
}

export const Button = ({
  title = 'Button',
  variants = 'Default',
  state = 'Default',
  icon = false,
  position = 'Right',
  instance = null,
  onClick,
}: ButtonProps) => {
  const rootClass = [
    'storybook-button',
    `storybook-button--variant-${variants.toLowerCase()}`,
    `storybook-button--state-${state.toLowerCase()}`,
  ].join(' ');

  const textClass =
    variants === 'Default'
      ? 'storybook-button__text storybook-button__text--inverted'
      : 'storybook-button__text storybook-button__text--normal';

  const iconNode = icon ? (
    <span className="storybook-button__icon-wrap" aria-hidden="true">
      {instance ?? <img src={calendarIcon} className="storybook-button__icon" alt="" />}
    </span>
  ) : null;

  return (
    <button type="button" className={rootClass} onClick={onClick}>
      {position === 'Left' && iconNode}
      <span className={textClass}>{title}</span>
      {position === 'Right' && iconNode}
    </button>
  );
};