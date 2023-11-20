---
to: "<%= gen_files.includes('Loading') ? `src/components/model/${name}/presentations/loading.tsx` : null %>"
---
import type { FC } from 'react';

export const <%= name %>LoadingPresentation:FC = () => {
  return <>this is <%= name %> component</>;
};
