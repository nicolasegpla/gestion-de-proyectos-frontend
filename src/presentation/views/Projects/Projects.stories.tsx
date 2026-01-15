import type { Meta, StoryObj } from '@storybook/react';

import { Projects } from './Projects';

const meta: Meta<typeof Projects> = {
    title: 'presentation/views/Projects',
    component: Projects,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Projects>;

export const Primary: Story = {
    args: {},
};
