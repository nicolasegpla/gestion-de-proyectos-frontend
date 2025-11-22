import type { Meta, StoryObj } from '@storybook/react';

import { TemplateCenter } from './TemplateCenter';

const meta: Meta<typeof TemplateCenter> = {
    title: 'presentation/components/templates/TemplateCenter',
    component: TemplateCenter,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TemplateCenter>;

export const Primary: Story = {
    args: {},
};
