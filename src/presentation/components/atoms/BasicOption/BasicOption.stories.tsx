import type { Meta, StoryObj } from '@storybook/react';

import { BasicOption } from './BasicOption';

const meta: Meta<typeof BasicOption> = {
    title: 'presentation/components/atoms/BasicOption',
    component: BasicOption,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BasicOption>;

export const Primary: Story = {
    args: {},
};
