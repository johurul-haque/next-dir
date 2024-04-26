#!/usr/bin/env node

import fs from 'fs';
import { createSpinner } from 'nanospinner';
import path from 'path';
import { fileURLToPath } from 'url';

import { detectAppDirectory } from './utils/detect-app-directory.js';
import { detectFlag } from './utils/detect-flags.js';

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

const spinner = createSpinner('⏱️ Give a sec...');

try {
  fs.mkdirSync(directoryPath);

  createFile(directoryPath, 'page');
  createFile(directoryPath, 'layout');

  if (detectFlag('--lg')) {
    createFile(directoryPath, 'loading');
  }

  spinner.success({ text: ' Success!' });
} catch (error) {
  spinner.error({ text: ' Oops! Something went wrong!' });
  process.exit(1);
}

type FileName = 'page' | 'layout' | 'loading';

export function createFile(dirPath: string, fileName: FileName) {
  const templatePath = path.join(
    fileURLToPath(new URL('templates', import.meta.url))
  );

  const sourceFileName = `${fileName}.js`;
  const targetFileName = `${fileName}.tsx`;

  const sourceFilePath = path.join(templatePath, sourceFileName);
  const targetFilePath = path.join(dirPath, targetFileName);

  const content = fs.readFileSync(sourceFilePath, 'utf-8');

  fs.writeFileSync(targetFilePath, content);
}
