---
to: "<%= `src/components/page/${name}/index.tsx` %>"
---
<% used_models.forEach(use_model=>{%>import { <%= use_model %> } from '@/components/model/<%= use_model %>';
<%})%>
export const Screen:React.FC = () => {
  return <>this is page of <%= name %> </>;
};
