import type { Meta, StoryObj } from '@storybook/react';

import { InputField } from './InputField';

const meta: Meta<typeof InputField> = {
    title: 'presentation/components/molecules/InputField',
    component: InputField,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const Primary: Story = {
    args: {
        labelProps: {
            label: 'Label works!',
        },
        inputProps: {
            type: 'text',
            placeholder: 'Placeholder',
            value: '',
            onChange: () => {},
            name: 'name',
        },
    },
};
