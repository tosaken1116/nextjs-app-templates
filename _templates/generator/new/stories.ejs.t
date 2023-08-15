---
to: src/components/<%= directory %>/<%= name %>/<%= name %>.stories.tsx
---

import { <%= name %> } from './<%= name %>';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof <%= name %>> = {
  title: '<%= name %>',
  component: <%= name %>,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof <%= name %>>;

export const Default: Story = <% if (!have_props) { %>{};<% }else{%>{
  args: {},
};<% } %>
