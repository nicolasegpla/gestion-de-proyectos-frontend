import type { Meta, StoryObj } from '@storybook/react';

import { CardResponseStatusInfo } from './CardResponseStatusInfo';

const meta: Meta<typeof CardResponseStatusInfo> = {
    title: 'presentation/components/atoms/CardResponseStatusInfo',
    component: CardResponseStatusInfo,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CardResponseStatusInfo>;

export const Primary: Story = {
    args: {
        text: 'This is a card response status info',
    },
};
