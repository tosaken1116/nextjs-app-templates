const fs = require('fs');
const path = require('path');
const targetDirectory = "./src/components/model"
function getDirectories(basePath) {
  return fs.readdirSync(basePath).filter(file => {
    const filePath = path.join(basePath, file);
    return fs.statSync(filePath).isDirectory();
  });
}


const directories = getDirectories(targetDirectory);

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
          type: 'multiselect',
          name: 'used_models',
          message: 'use model',
          choices: directories
        },
        {
          type: 'input',
          name: 'url',
          message: 'page_url localhost:3000/[] example:user/my',
        },
      ]).then(({ name, used_models,url}) => ({
        name,
        used_models,
        url
      }));
  },
};
