import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'presentation/components/atoms/Input',
    component: Input,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        type: 'text',
        placeholder: 'Placeholder',
        value: '',
        onChange: () => {},
        name: 'name',
    },
};
