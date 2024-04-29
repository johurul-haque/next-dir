# next-dir
CLI tool for creating route segments in NextJs projects.

## Quick start

Run the command at the root of your project.
```bash
npx next-dir [directory-name]
```

Or if you prefer installing it globally
```bash
npm i -g next-dir

next-dir [directory-name]
```

This command will create a directory with the following files inside the app directory.

```ini
├── page.tsx
├── layout.tsx
└── loading.tsx # Optional, specify using the --lg flag
```

### CLI Options
- `directory-name`: Defines the folder name.
  
- `--lg`: Optional flag for including `loading.tsx` file.
