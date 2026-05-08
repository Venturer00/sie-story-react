import { useEffect, useState } from 'react';
import './PropsModalParent.css';
import { PropsModalChild } from './PropsModalChild';

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

export interface PropsModalParentProps {
  open?: boolean;
  darkMode?: boolean;
  title?: string;
}

export const PropsModalParent = ({
  open = true,
  darkMode = true,
  title = 'Parent category',
}: PropsModalParentProps) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const rootClassName = ['storybook-props-modal-parent', darkMode ? 'dark' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <article className={rootClassName}>
      <div
        className={[
          'storybook-props-modal-parent__wrapper',
          isOpen
            ? 'storybook-props-modal-parent__wrapper--open'
            : 'storybook-props-modal-parent__wrapper--closed',
        ].join(' ')}
      >
        <button
          type="button"
          className="storybook-props-modal-parent__header"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={`${title} toggle`}
        >
          <span className="storybook-props-modal-parent__title">{title}</span>

          <span
            className={[
              'storybook-props-modal-parent__chevron-wrap',
              isOpen ? 'storybook-props-modal-parent__chevron-wrap--open' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <ChevronIcon />
          </span>
        </button>

        <div
          className={[
            'storybook-props-modal-parent__body',
            isOpen
              ? 'storybook-props-modal-parent__body--open'
              : 'storybook-props-modal-parent__body--closed',
          ].join(' ')}
        >
          <div className="storybook-props-modal-parent__children">
            <PropsModalChild open darkMode={darkMode} title="Child category" />
            <PropsModalChild open darkMode={darkMode} title="Child category" />
          </div>
        </div>
      </div>
    </article>
  );
};
