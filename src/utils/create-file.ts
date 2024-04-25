import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

type FileName = 'page.tsx' | 'layout.tsx' | 'loading.tsx';

export function createFile(directoryPath: string, fileName: FileName) {
  const templatePath = path.join(
    fileURLToPath(new URL('template', import.meta.url))
  );

  const content = fs.readFileSync(path.join(templatePath, fileName), 'utf-8');

  fs.writeFileSync(path.join(directoryPath, fileName), content);
}
