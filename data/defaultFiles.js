export const DEPENDENCIES = {
  dependencies: {
    "eslint-plugin-prettier": "5.2.3",
    "axios": "1.8.1",
    "eslint": "9.21.0",
    "esbuild-wasm": "0.25.0",
    "eslint-plugin-react": "7.37.4",
    "@vitejs/plugin-react": "4.3.4",
    "eslint-plugin-import": "2.31.0",
    "eslint-config-prettier": "10.0.2",
    "eslint-plugin-react-refresh": "0.4.19",
    "react-router-dom": "7.2.0",
    "framer-motion": "12.4.10",
    "esbuild": "0.25.0",
    "typescript": "5.8.2",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  devDependencies: {
    "typescript-eslint": "8.26.0",
    "@types/react-dom": "19.0.4",
    "@vitejs/plugin-react-swc": "3.8.0",
    "@eslint/js": "9.21.0",
    "@types/react": "19.0.10",
    "@types/node": "22.13.9",
    "@typescript-eslint/parser": "8.26.0",
    "@typescript-eslint/eslint-plugin": "8.26.0",
    "globals": "^15.15.0",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "vite": "^6.2.0"
  }
}
// export const DEPENDENCIES = {
//   dependencies: {
//     "eslint-plugin-prettier": "5.2.3",
//     "react-toastify": "11.0.5",
//     "axios": "1.8.1",
//     "eslint-plugin-react": "7.37.4",
//     "eslint-plugin-react-refresh": "0.4.19",
//     "react-swipeable": "7.0.2",
//     "arweave-wallet-kit": "1.1.0",
//     "eslint": "9.21.0",
//     "eslint-plugin-import": "2.31.0",
//     "react-redux": "9.2.0",
//     "prettier": "3.5.3",
//     "arweave": "1.15.5",
//     "@vitejs/plugin-react": "4.3.4",
//     "styled-components": "6.1.15",
//     "@permaweb/aoconnect": "0.0.77",
//     "eslint-config-prettier": "10.0.2",
//     "esbuild-wasm": "0.25.0",
//     "react-router-dom": "7.2.0",
//     "framer-motion": "12.4.10",
//     "@react-spring/web": "9.7.5",
//     "warp-arbundles": "1.0.4",
//     "esbuild": "0.25.0",
//     "typescript": "5.8.2",
//     "@reduxjs/toolkit": "2.6.0",
//     "react": "^19.0.0",
//     "react-dom": "^19.0.0"
//   },
//   devDependencies: {
//     "typescript-eslint": "8.26.0",
//     "@types/react-dom": "19.0.4",
//     "@vitejs/plugin-react-swc": "3.8.0",
//     "@eslint/js": "9.21.0",
//     "@types/react": "19.0.10",
//     "@types/node": "22.13.9",
//     "@typescript-eslint/parser": "8.26.0",
//     "@typescript-eslint/eslint-plugin": "8.26.0",
//     "globals": "^15.15.0",
//     "eslint-plugin-react-hooks": "^5.1.0",
//     "eslint-plugin-react-refresh": "^0.4.19",
//     "vite": "^6.2.0"
//   }
// }

export const defaultFiles_3 = {
  '.gitignore': `
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
  `.trim(),
  'eslint.config.js': `
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
  `.trim(),
  'index.html': `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/public/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
  `.trim(),
  'package.json': JSON.stringify(
    {
      "name": "anon",
      "private": true,
      "version": "0.0.0",
      "type": "module",
      "scripts": {
        "dev": "vite",
        "build": "tsc -b && vite build",
        "lint": "eslint .",
        "preview": "vite preview"
      },
      "dependencies": {
        "eslint-plugin-prettier": "5.2.3",
        "axios": "1.8.1",
        "eslint": "9.21.0",
        "esbuild-wasm": "0.25.0",
        "eslint-plugin-react": "7.37.4",
        "@vitejs/plugin-react": "4.3.4",
        "eslint-plugin-import": "2.31.0",
        "arweave": "1.15.5",

        "eslint-config-prettier": "10.0.2",
        "eslint-plugin-react-refresh": "0.4.19",
        "react-router-dom": "7.2.0",
        "framer-motion": "12.4.10",
        "esbuild": "0.25.0",
        "typescript": "5.8.2",
        "react": "^19.0.0",
        "react-dom": "^19.0.0"
      },
      "devDependencies": {
        "typescript-eslint": "8.26.0",
        "@types/react-dom": "19.0.4",
        "@vitejs/plugin-react-swc": "3.8.0",
        "@eslint/js": "9.21.0",
        "@types/react": "19.0.10",
        "@types/node": "22.13.9",
        "@typescript-eslint/parser": "8.26.0",
        "@typescript-eslint/eslint-plugin": "8.26.0",
        "globals": "^15.15.0",
        "eslint-plugin-react-hooks": "^5.1.0",
        "eslint-plugin-react-refresh": "^0.4.19",
        "vite": "^6.2.0"
      }
    }
    ,
    null,
    2
  ).trim(),
  'src/App.tsx': `
import { useState } from 'react'

function App() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div 
        className="p-8 rounded-lg border border-green-800/30 bg-black/50 backdrop-blur-sm transform transition-all duration-300 hover:border-green-600/50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1 className="text-4xl font-light text-green-500 mb-2">
          Vibe Coding on AO
        </h1>
        <h2 className="text-lg text-green-400/80">
          {isHovered ? "Ready to create?" : "Waiting for you..."}
        </h2>
      </div>
      </div>
  )
}

export default App
  `.trim(),
  'src/main.tsx': `
  import App from './App.tsx'
  import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <div className="bg-black text-neutral-300">
  <App/>
  </div>
  </StrictMode>,
)
  `.trim(),
  'vite-env.d.ts': `
  /// <reference types="vite/client" />
  `.trim(),
  'tsconfig.app.json': JSON.stringify(
    {
      compilerOptions: {
        tsBuildInfoFile: './node_modules/.tmp/tsconfig.app.tsbuildinfo',
        target: 'ES2020',
        useDefineForClassFields: true,
        lib: ['ES2020', 'DOM', 'DOM.Iterable'],
        module: 'ESNext',
        skipLibCheck: true,

        /* Bundler mode */
        moduleResolution: 'bundler',
        allowImportingTsExtensions: true,
        isolatedModules: true,
        moduleDetection: 'force',
        noEmit: true,
        jsx: 'react-jsx',

        /* Linting */
        strict: true,
        noUnusedLocals: true,
        noUnusedParameters: true,
        noFallthroughCasesInSwitch: true,
        noUncheckedSideEffectImports: true,
      },
      include: ['src'],
    },
    null,
    2
  ).trim(),
  'tsconfig.json': JSON.stringify(
    {
      files: [],
      references: [
        { path: './tsconfig.app.json' },
        { path: './tsconfig.node.json' },
      ],
    },
    null,
    2
  ).trim(),
  'tsconfig.node.json': JSON.stringify(
    {
      compilerOptions: {
        tsBuildInfoFile: './node_modules/.tmp/tsconfig.node.tsbuildinfo',
        target: 'ES2022',
        lib: ['ES2023'],
        module: 'ESNext',
        skipLibCheck: true,

        /* Bundler mode */
        moduleResolution: 'bundler',
        allowImportingTsExtensions: true,
        isolatedModules: true,
        moduleDetection: 'force',
        noEmit: true,

        /* Linting */
        strict: true,
        noUnusedLocals: true,
        noUnusedParameters: true,
        noFallthroughCasesInSwitch: true,
        noUncheckedSideEffectImports: true,
      },
      include: ['vite.config.ts'],
    },
    null,
    2
  ).trim(),
  'vite.config.ts': `
  import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
  `.trim(),
};
