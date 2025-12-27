import type { Meta, StoryObj } from '@storybook/react';

import { NavBarMobile } from './NavBarMobile';

const meta: Meta<typeof NavBarMobile> = {
    title: 'presentation/components/organisms/NavBarMobile',
    component: NavBarMobile,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NavBarMobile>;

export const Primary: Story = {
    args: {},
};
