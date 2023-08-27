---
to: "<%= gen_files.includes('Empty') ? `src/components/${directory}/${name}/presentations/empty.tsx` : null %>"
---
export const <%= name %>EmptyPresentation = () => {
  return <>this is <%= name %> empty presentation</>;
};
