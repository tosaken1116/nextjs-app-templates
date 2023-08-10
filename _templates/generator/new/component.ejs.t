---
to: src/components/<%= directory %>/<%= name %>/<%= name %>.tsx
---
<% if (have_props) { %>import { <%= name %>Props } from "./type";<% } %>
export const <%= name %> =(<% if (have_props) { %>{}:<%= name %>Props<% } %>)=>{
    return <>this is <%= name %> component</>
};