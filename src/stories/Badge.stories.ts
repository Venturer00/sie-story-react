// src/stories/Badge.stories.ts
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select',options: ['small', 'medium', 'large'] },
        variant: { control: 'select', options: ['primary', 'secondary', 'neutral', 'outline'] },
        showIcon: { control: 'boolean' },
    },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: { 
        size: 'medium', 
        variant: 'primary', 
        label: 'badge', 
        showIcon: true,
    },
};
export const Secondary: Story = {
    args: { 
        size: 'medium', 
        variant: 'secondary', 
        label: 'badge', 
        showIcon: true,
    },
};
export const Neutral: Story = {
    args: { 
        size: 'medium', 
        variant: 'neutral', 
        label: 'badge', 
        showIcon: true,
    },
};
export const Outline: Story = {
    args: { 
        size: 'medium', 
        variant: 'outline', 
        label: 'badge', 
        showIcon: true,
    },
};