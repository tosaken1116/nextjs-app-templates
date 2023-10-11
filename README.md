## Next.js AppRouter用のテンプレート

### 使用手順

1.  clone

        git clone git@github.com:tosaken1116/nextjs-app-templates.git

    or

        git clone https://github.com/tosaken1116/nextjs-app-templates.git

2.  ディレクトリ移動

        cd nextjs-app-templates

3.  パッケージマネージャの選択

        bash setup.sh

    ```
    Choose a package manager (npm/yarn/pnpm/bun):
    Enter a new project name:
    ```

### スクリプト

- `dev`
  - 開発サーバーを起動します。
- `build`
  - ビルドします。
- `start`
  - ビルドしたアプリケーションを起動します。
- `lint`
  - `next lint`を実行します。
- `new:ui`
  - `ui`コンポーネントを作成します
- `new:page`
  - `page`コンポーネントを作成します
- `new:model`
  - `model`コンポーネントを作成します
- `test:unit`
  - 単体テストを実行します
- `fmt`
  - `prettier`を実行します
- `storybook`
  - `storybook`を起動します
- `build-storybook`
  - `storybook`をビルドします
- `check:lint`
  - `eslint`を実行します
- `check:cspell`
  - `cspell`を実行します
- `check:markuplint`
  - `markuplint`を実行します
- `ci:test-group`
  - `test`の接頭辞がつくスクリプトを同時に実行します
- `ci:check`
  - `check`の接頭辞がつくスクリプトを同時に実行します
- `check`
  - `check`と`test`の接頭辞がつくスクリプトを同時に実行します
