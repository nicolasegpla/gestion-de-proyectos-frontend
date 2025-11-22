import type { Meta, StoryObj } from '@storybook/react';

import { Tikets } from './Tikets';

const meta: Meta<typeof Tikets> = {
    title: 'presentation/views/Tikets',
    component: Tikets,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tikets>;

export const Primary: Story = {
    args: {},
};
