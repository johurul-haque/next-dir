# next-dir
CLI tool for quickly creating folder-based routes in NextJs App router.

## Quick start
```bash
# Install globally
$ npm i -g next-dir

# Then run the command at the root of your NextJs project
$ next-dir [directory-name]
```

```bash
# Or use the npx command without installing globally
$ npx next-dir [directory-name]
```
This command will create a directory with the following files inside the app directory.

```bash
├── page.tsx
├── layout.tsx
└── loading.tsx # Optional, specify using the --lg flag
```

### CLI Options
- `directory-name`: Defines the folder name.
  
- `--lg`: Optional flag for including `loading.tsx` file.
