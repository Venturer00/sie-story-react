// src/stories/Badge.tsx
import './Badge.css';
import calendarIcon from '../assets/calendar-icon.svg';

interface BadgeProps {
    label: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary' | 'neutral' | 'outline';
    showIcon?: boolean;
}

export const Badge = ({
    label = 'Badge',
    size = 'medium',
    variant = 'primary',
    showIcon = true,
}: BadgeProps) => {
    const classes = ['storybook-badge', `storybook-badge--${size}`, `storybook-badge--${variant}`];

    return (
        <div className={classes.join(' ')}>
          {showIcon && <img src={calendarIcon} className="storybook-badge-icon" alt="" />}
          <span className="storybook-badge-label">{label}</span>
        </div>
      );
    };