import type { Meta, StoryObj } from '@storybook/react';

import { StarLayout } from './StarLayout';

const meta: Meta<typeof StarLayout> = {
    title: 'presentation/layouts/StarLayout',
    component: StarLayout,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StarLayout>;

export const Primary: Story = {
    args: {},
};
