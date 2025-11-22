import type { Meta, StoryObj } from '@storybook/react';

import { TemplateHead } from './TemplateHead';

const meta: Meta<typeof TemplateHead> = {
    title: 'presentation/components/templates/TemplateHead',
    component: TemplateHead,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TemplateHead>;

export const Primary: Story = {
    args: {},
};
