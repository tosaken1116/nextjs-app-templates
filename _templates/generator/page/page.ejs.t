---
to: "<%= `src/app/${url}/page.tsx` %>"
---
import { Screen } from '@/components/page/<%= name %>'

const <%= name %>:React.FC = () => <Screen />;

export default <%= name %>;