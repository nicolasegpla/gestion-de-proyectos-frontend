import type { Meta, StoryObj } from '@storybook/react';

import { SecondNavDesktop } from './SecondNavDesktop';

const meta: Meta<typeof SecondNavDesktop> = {
    title: 'presentation/components/organisms/SecondNavDesktop',
    component: SecondNavDesktop,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SecondNavDesktop>;

export const Primary: Story = {
    args: {},
};
