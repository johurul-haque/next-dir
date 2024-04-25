import fs from 'fs';
import path from 'path';

export function detectAppDirectory() {
  const rootAppPath = path.resolve(process.cwd(), 'app');

  if (fs.existsSync(rootAppPath) && fs.statSync(rootAppPath).isDirectory()) {
    return 'app';
  }

  const srcAppPath = path.resolve(process.cwd(), 'src', 'app');

  if (fs.existsSync(srcAppPath) && fs.statSync(srcAppPath).isDirectory()) {
    return 'src/app';
  }
}
