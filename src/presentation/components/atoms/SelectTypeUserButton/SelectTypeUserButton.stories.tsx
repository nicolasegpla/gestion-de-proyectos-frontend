import type { Meta, StoryObj } from '@storybook/react';

import { SelectTypeUserButton } from './SelectTypeUserButton';

const meta: Meta<typeof SelectTypeUserButton> = {
    title: 'presentation/components/atoms/SelectTypeUserButton',
    component: SelectTypeUserButton,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SelectTypeUserButton>;

export const Primary: Story = {
    args: {
        onClick: () => {
            console.log('SelectTypeUserButton clicked');
        },
    },
};
