---
to: "<%= `src/components/model/${name}/repository/get.ts` %>"
---
import type { <%= name %> } from "../type";

export const get<%= name %> = ():<%= name %> => {
  return { id: "1" };
};
