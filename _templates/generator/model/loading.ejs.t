---
to: "<%= gen_files.includes('Loading') ? `src/components/model/${name}/presentations/loading.tsx` : null %>"
---
export const <%= name %>LoadingPresentation = () => {
  return <>this is <%= name %> component</>;
};
