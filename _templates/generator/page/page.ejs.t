---
to: "<%= `src/app/${url}/index.tsx` %>"
---
import { Screen } from '@/components/page/<%= name %>'
export const <%= name %> = () => {
  return <Screen />;
};
