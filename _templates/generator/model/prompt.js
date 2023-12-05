const fs = require('fs');
const path = require('path');
const targetDirectory = './src/components/model';
function getDomains(basePath) {
  return fs.readdirSync(basePath).filter((file) => {
    const filePath = path.join(basePath, file);
    return fs.statSync(filePath).isDirectory();
  });
}

const domains = getDomains(targetDirectory);
if (domains.length === 0) {
  console.log('No domains found in the model directory');
  process.exit(1);
}
module.exports = {
  prompt: ({ prompter }) => {
    return prompter
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'component name',
        },
        {
          type: 'select',
          name: 'domains',
          message: 'domains',
          choices: domains,
        },
        {
          type: 'confirm',
          name: 'have_props',
          message: 'have props',
          choices: ['Yes', 'No'],
          initial: 'Yes',
        },
        {
          type: 'confirm',
          name: 'have_hooks',
          message: 'have hooks',
          choices: ['Yes', 'No'],
          initial: 'Yes',
        },
        {
          type: 'multiselect',
          name: 'gen_files',
          choices: [
            { label: 'empty', value: 'Empty' },
            { label: 'error', value: 'Error' },
            { label: 'loading', value: 'Loading' },
          ],
        },
      ])
      .then(({ name, domains, have_props, have_hooks, gen_files }) => ({
        name,
        domains,
        gen_files,
        have_props,
        have_hooks,
      }));
  },
};
