---
to: "<%= gen_files.includes('Empty') ? `src/components/model/${name}/presentations/empty.tsx` : null %>"
---
export const <%= name %>EmptyPresentation = () => {
  return <>this is <%= name %> empty presentation</>;
};
