import type { Meta, StoryObj } from '@storybook/react';

import { TemplateNavDesktop } from './TemplateNavDesktop';

const meta: Meta<typeof TemplateNavDesktop> = {
    title: 'presentation/components/templates/TemplateNavDesktop',
    component: TemplateNavDesktop,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TemplateNavDesktop>;

export const Primary: Story = {
    args: {},
};
