module.exports = {
  prompt: ({ prompter }) => {
    return prompter
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'domain name',
        },
      ])
      .then(({ name }) => ({
        name,
      }));
  },
};
