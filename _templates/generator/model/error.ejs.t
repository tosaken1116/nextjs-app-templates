---
to: "<%= gen_files.includes('Error') ? `src/components/model/${name}/presentations/error.tsx` : null %>"
---
export const <%= name %>ErrorPresentation:React.FC = () => {
  return <>this is <%= name %> error presentation</>;
};
