---
to: src/components/page/<%= name %>/index.stories.tsx
---

import { Screen as <%= name %> } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof <%= name %>> = {
  component: <%= name %>,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof <%= name %>>;

export const Default: Story = {
  args: {},
};