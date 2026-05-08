// src/stories/Card.tsx
import './Card.css';
// 1. Import the image asset
import backgroundDefault from '../assets/img-background.png';

interface CardProps {
  mode?: 'primary' | 'secondary';
  badgeText?: string;
  title: string;
  description: string;
  /** Optional image URL to override the default */
  imageUrl?: string;
}

export const Card = ({ mode = 'primary', badgeText, title, description, imageUrl }: CardProps) => {
  const modeClass = `storybook-card--${mode}`;
  
  return (
    <div className={['storybook-card', modeClass].join(' ')}>
      <div className="storybook-card-image-container">
        {/* The Badge */}
        {badgeText && <div className="storybook-card-badge">{badgeText}</div>}
        
        <div className="storybook-card-image">
          <img src={imageUrl || backgroundDefault} alt="card background" />
        </div>
      </div>
      <div className="storybook-card-content">
        <h3 className="storybook-card-title">{title}</h3>
        <p className="storybook-card-description">{description}</p>
      </div>
    </div>
  );
};