---
to: "<%= have_hooks ? `src/components/model/${name}/hooks/index.tsx` : null %>"
---
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

type IUse<%= name %> = {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

export const use<%= name %> = ():IUse<%= name %> => {
  const [state, setState] = useState("");
  return {state,setState}
};
