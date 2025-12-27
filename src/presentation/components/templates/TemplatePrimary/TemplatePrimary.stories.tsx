import type { Meta, StoryObj } from '@storybook/react';

import { TemplatePrimary } from './TemplatePrimary';

const meta: Meta<typeof TemplatePrimary> = {
    title: 'presentation/components/templates/TemplatePrimary',
    component: TemplatePrimary,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TemplatePrimary>;

export const Primary: Story = {
    args: {},
};
