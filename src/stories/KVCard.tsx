import './KVCard.css';
import { Badge } from './Badge';
import { Button } from './Button.tsx';
import kvHeaderDefault from '../assets/CS_KV.webp';

export interface KVCardProps {
  darkMode?: boolean;
  badge?: boolean;
  benefits?: boolean;
  benefit1?: boolean;
  benefit2?: boolean;
  benefit3?: boolean;
  cta?: boolean;
  headline?: string;
  description?: string;
  categoryLabel?: string;
  ctaLabel?: string;
  imageSrc?: string;
}

export const KVCard = ({
  darkMode = false,
  badge = true,
  benefits = true,
  benefit1 = true,
  benefit2 = true,
  benefit3 = true,
  cta = true,
  headline = 'Headline',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, acsa re aliquet odio mattis.',
  categoryLabel = 'Category',
  ctaLabel = 'Get premium acces!',
  imageSrc,
}: KVCardProps) => {
  const rootClass = ['storybook-kv-card', darkMode ? 'dark' : ''].filter(Boolean).join(' ');

  return (
    <article className={rootClass}>
      <div className="storybook-kv-card__image-header">
        <img className="storybook-kv-card__image" src={imageSrc || kvHeaderDefault} alt="" />
        {badge && (
          <div className="storybook-kv-card__badge">
            <Badge size="small" variant="primary" label={categoryLabel} showIcon={false} />
          </div>
        )}
      </div>

      <div className="storybook-kv-card__body">
        <h2 className="storybook-kv-card__headline">{headline}</h2>

        {benefits && (
          <div className="storybook-kv-card__benefits">
            {benefit1 && <Badge size="medium" variant="secondary" label="Primary" showIcon={true} />}
            {benefit2 && <Badge size="medium" variant="neutral" label="Secondary" showIcon={false} />}
            {benefit3 && <Badge size="medium" variant="neutral" label="Secondary" showIcon={false} />}
          </div>
        )}

        <p className="storybook-kv-card__description">{description}</p>

        {cta && (
          <div className="storybook-kv-card__cta">
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