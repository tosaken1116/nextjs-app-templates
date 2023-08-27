---
to: "<%= gen_files.includes('Error') ? `src/components/${directory}/${name}/presentations/error.tsx` : null %>"
---
export const <%= name %>ErrorPresentation = () => {
  return <>this is <%= name %> error presentation</>;
};
