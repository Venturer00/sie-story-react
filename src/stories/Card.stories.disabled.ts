import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card.disabled';

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imageUrl: { control: 'text' },
    mode: { control: 'radio', options: ['primary', 'secondary'] },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    mode: 'primary',
    badgeText: 'Category',
    title: 'Data Intelligence',
    description: 'AI synthesis ecosystem that autonomously interprets complex metrics and delivers strategic business insights.',
  },
};
export const Secondary: Story = {
  args: {
    mode: 'secondary',
    badgeText: 'Category',
    title: 'Data Intelligence',
    description: 'AI synthesis ecosystem that autonomously interprets complex metrics and delivers strategic business insights.',
  },
};
