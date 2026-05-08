import { useEffect, useState } from 'react';
import './PropsModalChild.css';
import { ControllerValueSet } from './stories/controllerValueSet';
import cardIconPng from './assets/card-icon.png';

const ChevronIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M4 7L9 12L14 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export interface PropsModalChildProps {
  open?: boolean; // optional controlled value
  darkMode?: boolean;
  title?: string;
}

export const PropsModalChild = ({
  open = true,
  darkMode = true,
  title = 'Child category',
}: PropsModalChildProps) => {
  const [isOpen, setIsOpen] = useState(open);

  // keep sync if Storybook control changes open prop
  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const rootClassName = ['storybook-props-modal-child', darkMode ? 'dark' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <article className={rootClassName}>
      <div className="storybook-props-modal-child__wrapper">
        <button
          type="button"
          className={[
            'storybook-props-modal-child__header',
            isOpen ? 'storybook-props-modal-child__header--open' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={`${title} toggle`}
        >
          <div className="storybook-props-modal-child__title-wrap">
            <img
              src={cardIconPng}
              className="storybook-props-modal-child__icon"
              alt=""
              aria-hidden="true"
            />
            <span className="storybook-props-modal-child__title">{title}</span>
          </div>

          <span
            className={[
              'storybook-props-modal-child__chevron-wrap',
              isOpen ? 'storybook-props-modal-child__chevron-wrap--open' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <ChevronIcon />
          </span>
        </button>

        <div
          className={[
            'storybook-props-modal-child__body',
            isOpen ? 'storybook-props-modal-child__body--open' : 'storybook-props-modal-child__body--closed',
          ].join(' ')}
        >
          <div className="storybook-props-modal-child__value-set">
            <ControllerValueSet header lightMode={!darkMode} />
          </div>
          <div className="storybook-props-modal-child__value-set">
            <ControllerValueSet header lightMode={!darkMode} />
          </div>
        </div>
      </div>
    </article>
  );
};