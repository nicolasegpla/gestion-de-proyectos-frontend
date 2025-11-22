import type { Meta, StoryObj } from '@storybook/react';

import { FormRegisterEmpresa } from './FormRegisterEmpresa';

const meta: Meta<typeof FormRegisterEmpresa> = {
    title: 'presentation/components/organisms/FormRegisterEmpresa',
    component: FormRegisterEmpresa,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FormRegisterEmpresa>;

export const Primary: Story = {
    args: {},
};
