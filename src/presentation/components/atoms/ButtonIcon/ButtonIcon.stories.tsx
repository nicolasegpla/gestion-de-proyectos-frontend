import type { Meta, StoryObj } from '@storybook/react';

import { ButtonIcon } from './ButtonIcon';

const meta: Meta<typeof ButtonIcon> = {
    title: 'presentation/components/atoms/ButtonIcon',
    component: ButtonIcon,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ButtonIcon>;

export const Primary: Story = {
    args: {},
};
