import type { Meta, StoryObj } from '@storybook/react';

import { CenterLayout } from './CenterLayout';

const meta: Meta<typeof CenterLayout> = {
    title: 'presentation/layouts/CenterLayout',
    component: CenterLayout,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CenterLayout>;

export const Primary: Story = {
    args: {},
};
