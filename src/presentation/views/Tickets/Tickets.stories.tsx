import type { Meta, StoryObj } from '@storybook/react';

import { Tickets } from './Tickets';

const meta: Meta<typeof Tickets> = {
    title: 'presentation/views/Tickets',
    component: Tickets,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tickets>;

export const Primary: Story = {
    args: {},
};
