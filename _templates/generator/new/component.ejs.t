---
to: "<%=  `src/components/${directory}/${name}/index.tsx` %>"
---
<% if (have_hooks) { %>import { use<%= name %> } from './hooks';<% } %>
<% gen_files.forEach(file=>{%>import { <%= name %><%= file %>Presentation  } from './presentations/<%= file.toLowerCase() %>';
<%})%>
<% if (have_props) { %>import type { <%= name %>Props } from './type';<% } %>
export const <%= name %> = (<% if (have_props) { %>{}: <%= name %>Props<% } %>) => {
  <% if (have_hooks) { %>const {} = use<%= name %>();<% } %>
  return (
    <>
      this is <%= name %> component
      <% gen_files.forEach(file=>{%><<%= name %><%= file %>Presentation />
      <%})%></>
  );
};


