import type { Meta, StoryObj } from '@storybook/react';
import { ControllerValueSet } from './controllerValueSet';

const meta = {
  title: 'SYSTEM/ControllerValueSet',
  component: ControllerValueSet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    header: { control: 'boolean' },
    lightMode: { control: 'boolean' },
    onChangeValue: { action: 'slider-change' },
  },
} satisfies Meta<typeof ControllerValueSet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: true,
    lightMode: true,
  },
  render: (args) => (
    <div style={{ minWidth: '300px' }}>
      <ControllerValueSet {...args} />
    </div>
  ),
  parameters: {
    backgrounds: { default: 'controller-dark-canvas' },
  },
};

export const Light: Story = {
  args: {
    header: true,
    lightMode: true,
  },
  render: (args) => (
    <div style={{ minWidth: '300px' }}>
      <ControllerValueSet {...args} />
    </div>
  ),
  parameters: {
    backgrounds: { default: 'controller-light-canvas' },
  },
};

export const NoHeader: Story = {
  args: {
    header: false,
    lightMode: true,
  },
  render: (args) => (
    <div style={{ minWidth: '300px' }}>
      <ControllerValueSet {...args} />
    </div>
  ),
  parameters: {
    backgrounds: { default: 'controller-dark-canvas' },
  },
};