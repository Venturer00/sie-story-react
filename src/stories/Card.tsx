import './Card.css';
import { Badge } from './Badge';
import { Button } from './Button.tsx';
import trailIconDefault from '../assets/trail-icon.png'; // replace with your real asset

export interface CardProps {
  darkMode?: boolean;
  header?: boolean;
  benefits?: boolean;
  benefit1?: boolean;
  benefit2?: boolean;
  benefit3?: boolean;
  cta?: boolean;

  headline?: string;
  description?: string;
  categoryLabel?: string;
  ctaLabel?: string;
}

export const Card = ({
  darkMode = false,
  header = true,
  benefits = true,
  benefit1 = true,
  benefit2 = true,
  benefit3 = true,
  cta = true,
  headline = 'Headline',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, acsa re aliquet odio mattis.',
  categoryLabel = 'Category',
  ctaLabel = 'Get premium acces!',
}: CardProps) => {
  const cardClassName = ['storybook-card', darkMode ? 'dark' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <article className={cardClassName}>
      {header && (
        <div className="storybook-card__header">
          <img className="storybook-card__trail-icon" src={trailIconDefault} alt="" />
          <div className="storybook-card__spacer" />
          <Badge size="small" variant="primary" label={categoryLabel} showIcon={false} />
        </div>
      )}

      <div className="storybook-card__content">
        <h2 className="storybook-card__headline">{headline}</h2>

        {benefits && (
          <div className="storybook-card__benefits">
            {benefit1 && <Badge size="medium" variant="secondary" label="Primary" showIcon={true} />}
            {benefit2 && <Badge size="medium" variant="neutral" label="Secondary" showIcon={false} />}
            {benefit3 && <Badge size="medium" variant="neutral" label="Secondary" showIcon={false} />}
          </div>
        )}

        <p className="storybook-card__description">{description}</p>

        {cta && (
          <div className="storybook-card__cta">
            <Button
              title={ctaLabel}
              variants="Default"
              state="Default"
              icon={false}
              position="Right"
            />
          </div>
        )}
      </div>
    </article>
  );
};