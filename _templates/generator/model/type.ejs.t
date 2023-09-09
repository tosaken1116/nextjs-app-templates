---
to: "<%= have_props ? `src/components/model/${name}/type/index.ts` : null %>"
---
<% if (have_props) { %>export type <%= name %>Props = {};<% } %>
