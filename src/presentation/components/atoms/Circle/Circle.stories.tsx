import type { Meta, StoryObj } from '@storybook/react';

import { Circle } from './Circle';

const meta: Meta<typeof Circle> = {
    title: 'presentation/components/atoms/Circle',
    component: Circle,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Circle>;

export const Primary: Story = {
    args: {},
};
