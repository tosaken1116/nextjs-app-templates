---
to: "<%= have_hooks ? `src/components/model/${domains}/components/${name}/hooks/index.ts` : null %>"
---
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

type IUse<%= name %> = {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  <% if (have_hooks) { %>isEmpty: boolean;<%} %>
}

export const use<%= name %> = ():IUse<%= name %> => {
  const [state, setState] = useState("");
  <% if(gen_files.includes("Empty")){ %>const isEmpty = true;<% }%>
  return {state,setState<% if(gen_files.includes("Empty")){ %>, isEmpty <% }%>}
};
