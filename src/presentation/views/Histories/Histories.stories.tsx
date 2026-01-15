import type { Meta, StoryObj } from '@storybook/react';

import { Histories } from './Histories';

const meta: Meta<typeof Histories> = {
    title: 'presentation/views/Histories',
    component: Histories,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Histories>;

export const Primary: Story = {
    args: {},
};
