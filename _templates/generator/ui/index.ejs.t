---
to: "<%= `src/components/ui/${name}/index.tsx` %>"
---
type Props = {};

export const <%= name %>:React.FC<Props> = ({}) => {
  return <>this is ui of <%= name %> </>;
};
