module.exports = {
  prompt: ({ prompter, inquirer }) => {
    return prompter
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'component name',
        },
        {
          type: 'select',
          name: 'directory',
          message: 'component type',
          choices: ['functional', 'model', 'page', 'ui'],
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
      ])
      .then(({ name, directory, have_props, have_hooks }) => {
        if (directory === 'model') {
          return prompter
            .prompt([
              {
                type: 'multiselect',
                name: 'gen_files',
                choices: [{label:'empty',value:"Empty"}, {label:'error',value:"Error"}, {label:'loading',value:"Loading"}],
              },
            ])
            .then(({ gen_files }) => ({
              name,
              directory,
              gen_files,
              have_props,
              have_hooks,
            }));
        }
      });
  },
};
