import type { Meta, StoryObj } from '@storybook/react';

import { NavBarDestop } from './NavBarDestop';

const meta: Meta<typeof NavBarDestop> = {
    title: 'presentation/components/organisms/NavBarDestop',
    component: NavBarDestop,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NavBarDestop>;

export const Primary: Story = {
    args: {},
};
