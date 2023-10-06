const readline = require('readline');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const packageRunCommand = {
  npm: 'npm run',
  yarn: 'yarn',
  pnpm: 'pnpm',
  bun: 'bun run',
};
const deleteDirectoryRecursive = (directoryPath) => {
  try {
    if (fs.existsSync(directoryPath)) {
      const files = fs.readdirSync(directoryPath);

      for (const file of files) {
        const filePath = path.join(directoryPath, file);
        if (fs.statSync(filePath).isDirectory()) {
          deleteDirectoryRecursive(filePath); // 再帰的にディレクトリを削除
        } else {
          fs.unlinkSync(filePath); // ファイルを削除
        }
      }

      fs.rmdirSync(directoryPath); // ディレクトリを削除
    }
  } catch (err) {
    console.error('ディレクトリの削除中にエラーが発生しました:', err);
  }
};
// 対話的にパッケージマネージャーを選択するプロンプトを表示
rl.question('Choose a package manager (npm/yarn/pnpm/bun): ', (answer) => {
  rl.question('Enter a new project name: ', (newProjectName) => {
    const selectedPackageManager = answer.trim().toLowerCase();

    // package.jsonの内容を読み込み
    const packageJsonPath = './package.json'; // 実際のパスに置き換えてください
    const packageJson = require(packageJsonPath);
    // package.jsonのプロジェクト名を変更
    packageJson.name = newProjectName;

    const validPackageManagers = ['npm', 'yarn', 'pnpm', 'bun'];
    // 選択したパッケージマネージャーに基づいてpackage.jsonを更新
    if (
      selectedPackageManager === 'npm' ||
      selectedPackageManager === 'yarn' ||
      selectedPackageManager === 'pnpm' ||
      selectedPackageManager === 'bun'
    ) {
      packageJson.engines = validPackageManagers.reduce((engines, manager) => {
        if (manager !== selectedPackageManager) {
          engines[manager] = `${selectedPackageManager} please`;
        }
        return engines;
      }, {});
      packageJson['lint-staged'] = {
        "src/**/*.{js,jsx,ts,tsx,json,css,scss}": [
          `${packageRunCommand[selectedPackageManager]} check:lint --fix`,
          `${packageRunCommand[selectedPackageManager]} fmt`
        ]
      };
      // 更新したpackage.jsonをファイルに書き込む
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

      const huskyFilePath = './.husky/'; // 実際のパスに置き換えてください
      ['pre-commit', 'pre-push', 'commit-msg'].map((action) => {
        const huskyFileContent = fs.readFileSync(
          huskyFilePath + action,
          'utf-8'
        );

        // 選択したパッケージマネージャーに基づいて.huskyファイルのコマンドを変更
        const updatedHuskyFileContent = huskyFileContent.replace(
          /(bun run|npm run|yarn|pnpm)/g,
          packageRunCommand[selectedPackageManager]
        );

        // 更新した.huskyファイルの内容をファイルに書き込む
        fs.writeFileSync(
          huskyFilePath + action,
          updatedHuskyFileContent,
          'utf-8'
        );
      });
      ['post-merge'].map((action) => {
        const huskyFileContent = fs.readFileSync(
          huskyFilePath + action,
          'utf-8'
        );

        // 選択したパッケージマネージャーに基づいて.huskyファイルのコマンドを変更
        const updatedHuskyFileContent = huskyFileContent.replace(
          /(npm|yarn|pnpm|bun) install/g,
          `${selectedPackageManager} install`
        );

        // 更新した.huskyファイルの内容をファイルに書き込む
        fs.writeFileSync(
          huskyFilePath + action,
          updatedHuskyFileContent,
          'utf-8'
        );
      });
      const sourceFilePath = `.github/actions/${selectedPackageManager}/ci.yml`;
      const destinationFilePath = '.github/workflows/ci.yml';
      try {
        fs.renameSync(sourceFilePath, destinationFilePath);
        ['npm', 'yarn', 'pnpm', 'bun'].map((manager) => {
          if (manager !== selectedPackageManager) {
            deleteDirectoryRecursive(`./.github/actions/${manager}`);
          }
        });
      } catch (err) {
        console.error('ファイルの処理中にエラーが発生しました:', err);
      }

      console.log(
        `Selected ${selectedPackageManager} and updated package.json.`
      );
    } else {
      console.log('Invalid package manager selection.');
    }
    fs.unlinkSync('./.github/dependabot.yml');
    fs.renameSync(
      './.github/dependabot.sample.yml',
      './.github/dependabot.yml'
    );

    console.log('Installing dependencies...');
    exec(`${selectedPackageManager} install --silent`, (error, stdout) => {
        if (error) {
          console.error(`failed installing dependencies: ${error}`);
          return;
        }
        console.log(`success installing dependencies :\n${stdout}`);
      });
    rl.close();
    console.log('setup finished!');
  });
});
