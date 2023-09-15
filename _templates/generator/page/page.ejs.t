---
to: "<%= `src/app/${url}/index.tsx` %>"
---
import { Screen } from '@/components/page/<%= name %>'
const <%= name %>:React.FC = () => {
  return <Screen />;
};

export default <%= name %>;