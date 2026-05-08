// src/PropsModalChild.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { PropsModalChild } from './PropsModalChild';

const meta = {
  title: 'SYSTEM/PropsModalChild',
  component: PropsModalChild,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '100%',
          minHeight: 320,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingTop: 16,
          boxSizing: 'border-box',
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    darkMode: { control: 'boolean' },
    title: { control: 'text' },
  },
} satisfies Meta<typeof PropsModalChild>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    darkMode: true,
    title: 'Child category',
  },
  parameters: {
    backgrounds: { default: 'controller-dark-canvas' },
  },
};

export const Closed: Story = {
  args: {
    open: false,
    darkMode: true,
    title: 'Child category',
  },
  parameters: {
    backgrounds: { default: 'controller-dark-canvas' },
  },
};