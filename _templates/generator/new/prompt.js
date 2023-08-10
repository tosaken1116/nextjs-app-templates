
module.exports = {
  prompt: ({ inquirer }) => {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "component name",
        },
        {
          type: "select",
          name: "directory",
          message: "component type",
          choices: ["functional", "model","page","ui"],
        },
        {
          type: "confirm",
          name: "have_props",
          message: "have props",
          choices: ["Yes", "No"],
          initial: "Yes"
      }
      ])
      .then(({ name, directory , have_props}) => {
        return { name, directory, have_props };
      });
  },
};

