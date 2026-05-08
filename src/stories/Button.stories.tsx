import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    variants: { control: 'select', options: ['Default', 'Neutral', 'Outline'] },
    state: { control: 'select', options: ['Default', 'Hover'] },
    position: { control: 'select', options: ['Left', 'Right'] },
    icon: { control: 'boolean' },
    onClick: { action: 'button-click-count' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const withActionOnly = (args: any) => {
  let count = 0;

  return (
    <Button
      {...args}
      onClick={() => {
        count += 1;
        args.onClick?.({ count }); 
      }}
    />
  );
};

export const Default: Story = {
  args: {
    title: 'Button',
    variants: 'Default',
    state: 'Default',
    position: 'Right',
    icon: false,
  },
  render: withActionOnly,
};

export const Neutral: Story = {
  args: {
    title: 'Button',
    variants: 'Neutral',
    state: 'Default',
    position: 'Right',
    icon: false,
  },
  render: withActionOnly,
};

export const Outline: Story = {
  args: {
    title: 'Button',
    variants: 'Outline',
    state: 'Default',
    position: 'Right',
    icon: false,
  },
  render: withActionOnly,
};