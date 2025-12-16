import type { Meta, StoryObj } from '@storybook/react';

import { TemplateRow } from './TemplateRow';

const meta: Meta<typeof TemplateRow> = {
    title: 'presentation/components/templates/TemplateRow',
    component: TemplateRow,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TemplateRow>;

export const Primary: Story = {
    args: {},
};
