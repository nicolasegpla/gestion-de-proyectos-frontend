import type { Meta, StoryObj } from '@storybook/react';

import { PrimaryLayout } from './PrimaryLayout';

const meta: Meta<typeof PrimaryLayout> = {
    title: 'presentation/layouts/PrimaryLayout',
    component: PrimaryLayout,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PrimaryLayout>;

export const Primary: Story = {
    args: {},
};
