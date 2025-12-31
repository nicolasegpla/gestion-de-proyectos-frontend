import type { Meta, StoryObj } from '@storybook/react';

import { ButtonUser } from './ButtonUser';

const meta: Meta<typeof ButtonUser> = {
    title: 'presentation/components/atoms/ButtonUser',
    component: ButtonUser,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ButtonUser>;

export const Primary: Story = {
    args: {},
};
