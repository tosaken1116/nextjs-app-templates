---
to: src/components/model/<%= domains %>/components/<%= name %>/index.stories.tsx
---

import { <%= name %>Presentation  } from './presentations';
<% gen_files.forEach(file=>{%>import { <%= name %><%= file %>Presentation  } from './presentations/<%= file.toLowerCase() %>';
<%})%>
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof <%= name %>Presentation> = {
  component: <%= name %>Presentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof <%= name %>Presentation>;

export const Default: Story = <% if (!have_props) { %>{};<% }else{%>{
  args: {},
};<% } %>
<% gen_files.forEach(file=>{%>
export const <%= file %>: Story = {
  render: () => <<%= name %><%= file %>Presentation />,
};
<%})
%>