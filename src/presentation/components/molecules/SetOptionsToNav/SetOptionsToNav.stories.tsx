import type { Meta, StoryObj } from '@storybook/react';

import { SetOptionsToNav } from './SetOptionsToNav';

const meta: Meta<typeof SetOptionsToNav> = {
    title: 'presentation/components/molecules/SetOptionsToNav',
    component: SetOptionsToNav,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SetOptionsToNav>;

export const Primary: Story = {
    args: {},
};
