import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ButtonToClose } from './ButtonToClose';

const meta: Meta<typeof ButtonToClose> = {
    title: 'presentation/components/atoms/ButtonToClose',
    component: ButtonToClose,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ButtonToClose>;

export const Primary: Story = {
    args: {
        onClick: fn(),
    },
};
