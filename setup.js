const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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
        'src/**/*.{ts,tsx}': `${selectedPackageManager} run lint:precommit`,
        'src/**/*.{js,jsx,ts,tsx,json,css,scss}': `${selectedPackageManager} run fmt:precommit`,
      };
      // 更新したpackage.jsonをファイルに書き込む
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

      const huskyFilePath = './.husky/'; // 実際のパスに置き換えてください
      ['pre-commit', 'pre-push', 'post-merge'].map((action) => {
        const huskyFileContent = fs.readFileSync(
          huskyFilePath + action,
          'utf-8'
        );

        // 選択したパッケージマネージャーに基づいて.huskyファイルのコマンドを変更
        const updatedHuskyFileContent = huskyFileContent.replace(
          /bun/g,
          selectedPackageManager
        );

        // 更新した.huskyファイルの内容をファイルに書き込む
        fs.writeFileSync(
          huskyFilePath + action,
          updatedHuskyFileContent,
          'utf-8'
        );
      });

      console.log(
        `Selected ${selectedPackageManager} and updated package.json.`
      );
    } else {
      console.log('Invalid package manager selection.');
    }

    rl.close();
  });
});
