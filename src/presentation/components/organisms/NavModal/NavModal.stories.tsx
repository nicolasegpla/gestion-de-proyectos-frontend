import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { NavModal } from './NavModal';

const meta: Meta<typeof NavModal> = {
    title: 'presentation/components/organisms/NavModal',
    component: NavModal,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NavModal>;

export const Primary: Story = {
    args: {
        title: 'Título del Modal',
        onClose: fn(),
    },
};
