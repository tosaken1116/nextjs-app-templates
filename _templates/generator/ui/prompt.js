module.exports = {
  prompt: ({ prompter }) => {
    return prompter
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'component name',
        },
      ]).then(({ name }) => ({
        name
      }));
  },
};
