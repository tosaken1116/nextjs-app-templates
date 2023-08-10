#!/bin/bash
node ./setup.js
rm -r node_modules
rm -f package-lock.json pnpm-lock.yaml yarn.lock bun.lockb
rm ./setup.js
rm ./setup.sh