#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

import { createFile } from './utils/create-file';
import { detectAppDirectory } from './utils/detect-app-directory';
import { detectFlag } from './utils/detect-flags';

const dirName = process.argv[2];

if (!dirName) {
  console.error('Please provide route name');
  process.exit(1);
}

const appDir = detectAppDirectory();

if (!appDir) {
  console.error("Couldn't locate app directory!");
  process.exit(1);
}

const directoryPath = path.join(appDir, dirName);

if (fs.existsSync(directoryPath)) {
  console.error(`Directory ${dirName} already exists!`);
  process.exit(1);
}

try {
  fs.mkdirSync(directoryPath);

  createFile(directoryPath, 'page.tsx');
  createFile(directoryPath, 'layout.tsx');

  if (detectFlag('--lg')) {
    createFile(directoryPath, 'loading.tsx');
  }
} catch (error) {
  console.log('Something went wrong!');
  process.exit(1);
}
