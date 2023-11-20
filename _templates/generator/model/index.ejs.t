---
to: "<%= `src/components/model/${name}/presentations/index.tsx` %>"
---
import type { FC } from 'react';

<% if (have_hooks) { %>import { use<%= name %> } from '../hooks';<% } %>

<% if (have_hooks && gen_files.includes("Empty")) { %>import { <%= name %>EmptyPresentation } from './empty';<% } %>

export const <%= name %>Presentation: FC = () => {
  <% if (have_hooks) { %>const {<% if(gen_files.includes("Empty")){ %> isEmpty <% }%>} = use<%= name %>();<% } %>
  <% if (have_hooks && gen_files.includes("Empty")) { %>if (isEmpty){
    return <<%= name %>EmptyPresentation />;
  }<%} %>
  return <div>this is <%= name %> presentation</div>;
};
