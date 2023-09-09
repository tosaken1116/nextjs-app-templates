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
          choices: [{label:'empty',value:"Empty"}, {label:'error',value:"Error"}, {label:'loading',value:"Loading"}],
        },
      ]).then(({ name, have_props, have_hooks,gen_files }) => ({
        name,
        gen_files,
        have_props,
        have_hooks,
      }));
  },
};
