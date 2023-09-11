#!/bin/bash
rm -rf ./.git
git init
node ./setup.js
rm -r node_modules
rm -f package-lock.json pnpm-lock.yaml yarn.lock bun.lockb
rm ./setup.js
rm ./setup.sh
git add .
git commit --no-verify -m "setup with https://github.com/tosaken1116/nextjs-app-templates"