import type { Meta, StoryObj } from '@storybook/react';

import Dashboard from './Dashboard';

const meta: Meta<typeof Dashboard> = {
    title: 'presentation/views/Dashboard',
    component: Dashboard,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Dashboard>;

export const Primary: Story = {
    args: {},
};
