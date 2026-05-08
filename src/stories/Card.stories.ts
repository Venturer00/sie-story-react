import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card.tsx';

const meta = {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'centered',
        controls: { sort: 'none' },
    },
    tags: ['autodocs'],
    argTypes: {
        darkMode: { control: 'boolean' },
        header: { control: 'boolean' },
        benefits: { control: 'boolean' },
        benefit1: { control: 'boolean' },
        benefit2: { control: 'boolean' },
        benefit3: { control: 'boolean' },
        cta: { control: 'boolean' },
        headline: { control: 'text' },
        description: { control: 'text' },
        categoryLabel: { control: 'text' },
        ctaLabel: { control: 'text' },
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        darkMode: false,
        header: true,
        benefits: true,
        benefit1: true,
        benefit2: true,
        benefit3: true,
        cta: true,
        headline: 'Headline',
        categoryLabel: 'Category',
        ctaLabel: 'Get premium acces!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, acsa re aliquet odio mattis.',
    },
};

export const NoBenefits: Story = {
    args: { ...Default.args, benefits: false },
};

export const OnlyFirtstBenefit: Story = {
    args: { ...Default.args, benefit2: false, benefit3: false },
};

export const ContentOnly: Story = {
    args: { ...Default.args, header: false, benefits: false, cta: false },
};