---
to: "<%= have_hooks ? `src/components/model/${name}/hooks/index.tsx` : null %>"
---
import { useState } from 'react';

export const use<%= name %> = () => {
  const [state, setState] = useState();
  return {state,setState}
};
