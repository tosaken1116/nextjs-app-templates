---
to: "<%= gen_files.includes('Loading') ? `src/components/${directory}/${name}/presentations/loading.tsx` : null %>"
---
export const <%= name %>LoadingPresentation = () => {
  return <>this is <%= name %> component</>;
};
