import type { Meta, StoryObj } from '@storybook/react';

import { Hitorias } from './Hitorias';

const meta: Meta<typeof Hitorias> = {
    title: 'presentation/views/Hitorias',
    component: Hitorias,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Hitorias>;

export const Primary: Story = {
    args: {},
};
