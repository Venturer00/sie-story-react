import type { Meta, StoryObj } from '@storybook/react';
import { KVCard } from './KVCard.tsx';

const meta = {
  title: 'Components/KVCard',
  component: KVCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    darkMode: { control: 'boolean' },
    badge: { control: 'boolean' },
    benefits: { control: 'boolean' },
    benefit1: { control: 'boolean' },
    benefit2: { control: 'boolean' },
    benefit3: { control: 'boolean' },
    cta: { control: 'boolean' },
    headline: { control: 'text' },
    description: { control: 'text' },
    categoryLabel: { control: 'text' },
    ctaLabel: { control: 'text' },
    imageSrc: { control: 'text' },
  },
} satisfies Meta<typeof KVCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    darkMode: false,
    badge: true,
    benefits: true,
    benefit1: true,
    benefit2: true,
    benefit3: true,
    cta: true,
    headline: 'Headline',
    categoryLabel: 'Category',
    ctaLabel: 'Get premium acces!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, acsa re aliquet odio mattis.',
  },
};

export const NoBenefits: Story = {
  args: { ...Default.args, benefits: false },
};

export const OnlyFirtstBenefit: Story = {
  args: { ...Default.args, benefit2: false, benefit3: false },
};