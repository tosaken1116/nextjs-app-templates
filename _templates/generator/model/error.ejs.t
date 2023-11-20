---
to: "<%= gen_files.includes('Error') ? `src/components/model/${name}/presentations/error.tsx` : null %>"
---
import type { FC } from 'react';

export const <%= name %>ErrorPresentation:FC = () => {
  return <>this is <%= name %> error presentation</>;
};
