export const DEPENDENCIES = {
  dependencies: {
    react: "^19.0.0",
    "react-dom": "^19.0.0",
    axios: "^1.7.9",
    arweave: "1.15.5",
    "arweave-wallet-kit": "1.1.0",
    "@permaweb/aoconnect": "^0.0.63",
    esbuild: "0.25.0",
    "esbuild-wasm": "0.25.0",
    "warp-arbundles": "^1.0.4",
    prettier: "3.1.0",
    "react-router-dom": "6.28.0",
    "react-tinder-card": "1.6.4",
    "@react-spring/web": "9.7.5",
    "styled-components": "6.1.15",
    "tw-to-css": "0.0.12",
    eslint: "^9.21.0",
    "eslint-config-prettier": "9.1.0",
    "eslint-plugin-import": "2.29.0",
    "eslint-plugin-prettier": "5.0.1",
    "eslint-plugin-react": "7.33.2",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "@vitejs/plugin-react": "^4.3.4",
    vite: "^6.2.0",
    typescript: "~5.7.2",
    "react-swipeable": "^6.1.0",
    'framer-motion': '^4.1.17',
    "react-toastify": "11.0.5"
  },
  devDependencies: {
    "@types/node": "20.12.13",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@eslint/js": "^9.21.0",
    "@typescript-eslint/eslint-plugin": "6.13.1",
    "@typescript-eslint/parser": "6.13.1",
    "typescript-eslint": "^8.24.1",
    "@vitejs/plugin-react-swc": "3.7.0"
  }
};

// "globals": "^15.15.0",
export const defaultFiles_2 = {
  '/.prettierignore':
    `**/*.md
**/*.svg
**/*.ejs
**/*.html

/config
/pnpm-lock.yaml
/pnpm-workspace.yaml
build
dist
node_modules

.DS_Store`.trim(),
  '/.prettierrc.json5':
    `{
  trailingComma: 'all',
  tabWidth: 2,
  printWidth: 80,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  bracketSpacing: true,
  arrowParens: 'always',
  jsxBracketSameLine: false,
  endOfLine: 'lf',
  tailwindConfig: './tailwind.config.js',
  tailwindAttributes: ['wrapperClassName', 'wrapClassName', 'rootClassName'],
  tailwindFunctions: ['classNames', 'classnames', 'twMerge'],
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
}`.trim(),
  '/eslint.config.js':
    `export default [
  {
    ignores: [
      "node_modules",
      "scripts/*",
      "config/*",
      "pnpm-lock.yaml",
      "pnpm-workspace.yaml",
      ".DS_Store",
      "package.json",
      "tsconfig.json",
      "**/*.md",
      "build",
      ".eslintrc.cjs",
      "eslint.config.js",
      "**/.*" 
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 2021,  
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        Edit: 'writable',
        console: 'writable',
        _: 'writable',
        \$: 'writable',
      },
      ecmaFeatures: {
        jsx: true,
      },
    },
    
    plugins: {
      react: require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      prettier: require('eslint-plugin-prettier'),
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      'react-refresh': require('eslint-plugin-react-refresh'),
      import: require('eslint-plugin-import'),
    },
    
    rules: {
      ...require('eslint-plugin-react').configs.recommended.rules,
      ...require('eslint-plugin-react-hooks').configs.recommended.rules,
      ...require('@typescript-eslint/eslint-plugin').configs.recommended.rules,
      ...require('eslint-plugin-prettier').configs.recommended.rules,
      'prettier/prettier': 'error', // Prettier formatting as an ESLint rule
    },
    
    settings: {
      react: {
        version: 'detect', 
      },
    },
  },
];`.trim(),
  '/index.html': `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <link
      href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <title>Vite + React + Tailwind</title>
    </head>
    <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`.trim(),
  '/package.json':
    JSON.stringify({
      "name": "anon_default_files",
      "private": true,
      "version": "0.0.0",
      "type": "module",
      "scripts": {
        "dev": "vite",
        "build": "tsc && vite build",
        "preview": "vite preview"
      },
      "dependencies": DEPENDENCIES.dependencies,
      "devDependencies": DEPENDENCIES.devDependencies,
    }, null, 2).trim(),
  '/postcss.config.js': `
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
};
`.trim(),
  '/src/App.tsx': `

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          Welcome to Tailwind in Sandpack
        </h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click Me
        </button>
      </div>
    </div>
  );
}
export default App;
`.trim(),
  '/src/style.css': `
@tailwind base;
@tailwind components;
@tailwind utilities;
`.trim(),

  '/src/main.tsx': `
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
`.trim(),
  '/src/typings.d.ts':
    ``.trim(),
  '/src/vite-env.d.ts': `
    /// <reference types="vite/client" />
  `.trim(),
  '/tailwind.config.js': `
    module.exports = {
      content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './index.html'
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    };
  `.trim(),
  '/tsconfig.json': JSON.stringify({
    "compilerOptions": {
      "target": "ESNext",
      "lib": ["DOM", "DOM.Iterable", "ESNext"],
      "module": "ESNext",
      "skipLibCheck": true,
      "moduleResolution": "bundler",
      "allowImportingTsExtensions": true,
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noEmit": true,
      "jsx": "react-jsx",
      "strict": true,
      "esModuleInterop": true,
      "baseUrl": ".",
      "paths": {
        "@/*": ["src/*"]
      }
    },
    "include": ["src"],
    "references": [{ "path": "./tsconfig.node.json" }]
  }, null, 2).trim(),
  '/tsconfig.node.json': JSON.stringify({
    "compilerOptions": {
      "composite": true,
      "skipLibCheck": true,
      "module": "ESNext",
      "moduleResolution": "bundler",
      "allowSyntheticDefaultImports": true
    },
    "include": ["vite.config.ts"]
  }, null, 2).trim(),
  '/vite.config.ts': `
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
      plugins: [react()],
      resolve: {
        alias: {
          '@': '/src'
        }
      }
    });
  `.trim(),
};


// '/src/components/Header.tsx':
//   `       import React from 'react';\n       import { motion } from 'framer-motion';\n\n       const Header = () => {\n         return (\n           <motion.header\n             initial={{ y: -100 }}\n             animate={{ y: 0 }}\n             transition={{ duration: 0.5 }}\n             className='header'\n           >\n             <h1>LoveConnect</h1>\n           </motion.header>\n         );\n       };\n\n       export default Header;\n       `.trim(),
// '/src/components/ProfileCard.tsx':
//   `       import React from 'react';\n       import { motion } from 'framer-motion';\n\n       interface Profile {\n         name: string;\n         age: number;\n         image: string;\n       }\n\n       const ProfileCard = ({ profile }: { profile: Profile }) => {\n         return (\n           <motion.div\n             initial={{ scale: 0.5 }}\n             animate={{ scale: 1 }}\n             transition={{ duration: 0.5 }}\n             className='profile-card'\n           >\n             <img src={profile.image} alt={profile.name} />\n             <h2>{profile.name}</h2>\n             <p>Age: {profile.age}</p>\n             <button className='send-request-btn'>Send Connection Request</button>\n           </motion.div>\n         );\n       };\n\n       export default ProfileCard;\n`.trim(),
// '/src/components/ConnectionRequests.tsx':
//   `import React, { useState, useEffect } from 'react';\n       import { motion } from 'framer-motion';\n\n       interface ConnectionRequest {\n         id: number;\n         name: string;\n         image: string;\n       }\n\n       const ConnectionRequests = () => {\n         const [requests, setRequests] = useState<ConnectionRequest[]>([]);\n\n         useEffect(() => {\n           // Fetch connection requests from API\n           const fetchRequests = async () => {\n             const response = await fetch('/api/connection-requests');\n             const data = await response.json();\n             setRequests(data);\n           };\n           fetchRequests();\n         }, []);\n\n         return (\n           <motion.div\n             initial={{ x: 100 }}\n             animate={{ x: 0 }}\n             transition={{ duration: 0.5 }}\n             className='connection-requests'\n           >\n             <h2>Connection Requests</h2>\n             {requests.map((request) => (\n               <div key={request.id} className='request'>\n                 <img src={request.image} alt={request.name} />\n                 <h3>{request.name}</h3>\n                 <button className='accept-btn'>Accept</button>\n                 <button className='decline-btn'>Decline</button>\n               </div>\n             ))}\n           </motion.div>\n         );\n       };\n\n       export default ConnectionRequests;\n       `.trim(),
// '/src/App.tsx':
//   `       import React from 'react'; \n       import Header from './components/Header'; \n       import ProfileCard from './components/ProfileCard'; \n       import ConnectionRequests from './components/ConnectionRequests'; \n\n       const App = () => { \n         return (\n < div className = 'app' >\n < Header />\n <div div className = 'main-content' >\n < ProfileCard\n                 profile = {{ \n                   name: 'John Doe', \n                   age: 30, \n                   image: 'https://example.com/johndoe.jpg', \n } }\n               />\n               <ConnectionRequests />\n             </div >\n           </div >\n         ); \n       }; \n\n       export default App; \n       `.trim(),
// '/src/index.css':
//   `       body { \n         font - family: Arial, sans - serif; \n         background - color: #f0f0f0; \n } \n\n.header { \n         background - color: #ff69b4; \n         color: #fff; \n         padding: 1rem; \n         text - align: center; \n } \n\n.profile - card { \n         background - color: #fff; \n         padding: 1rem; \n         border: 1px solid #ddd; \n         border - radius: 10px; \n         box - shadow: 0 0 10px rgba(0, 0, 0, 0.1); \n } \n\n.connection - requests { \n         background - color: #fff; \n         padding: 1rem; \n         border: 1px solid #ddd; \n         border - radius: 10px; \n         box - shadow: 0 0 10px rgba(0, 0, 0, 0.1); \n } \n\n.request { \n         background - color: #f7f7f7; \n         padding: 1rem; \n         border - bottom: 1px solid #ddd; \n } \n\n.accept - btn, .decline - btn { \n         background - color: #ff69b4; \n         color: #fff; \n         border: none; \n         padding: 0.5rem 1rem; \n         border - radius: 5px; \n         cursor: pointer; \n } \n\n.accept - btn: hover, .decline - btn:hover { \n         background - color: #ff99cc; \n } \n`.trim(),
