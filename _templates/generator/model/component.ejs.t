---
to: "<%=  `src/components/model/${name}/index.tsx` %>"
---
<% if (have_hooks) { %>import { use<%= name %> } from './hooks';<% } %>
<% gen_files.forEach(file=>{%>import { <%= name %><%= file %>Presentation  } from './presentations/<%= file.toLowerCase() %>';
<%})%>
<% if (have_props) { %>type Props = {};<% } %>

export const <%= name %>:React.FC<% if (have_props) { %><Props><% } %> = (<% if (have_props) { %>{}<% } %>) => {
  <% if (have_hooks) { %>const {} = use<%= name %>();<% } %>
  return (
    <>
      this is <%= name %> component
      <% gen_files.forEach(file=>{%><<%= name %><%= file %>Presentation />
    <%})%></>
  );
};


