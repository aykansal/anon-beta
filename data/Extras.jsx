export default {
  SUGGSTIONS: [
    'Create ToDo App in nextjs',
    'Create Budget Track App',
    'Create Gym Managment Portal Dashboard',
    'Create Quizz App On History',
    'Create Login Signup Screen',
  ],
  HERO_HEADING: 'What do you want to build?',
  HERO_DESC: 'Prompt, run, edit, and deploy full-stack web apps.',
  INPUT_PLACEHOLDER: 'What you want to build?',
  SIGNIN_HEADING: 'Continue With Anon.New 2.0',
  SIGNIN_SUBHEADING:
    'To use Anon you must log into an existing account or create one.',
  SIGNIn_AGREEMENT_TEXT:
    'By using Anon, you agree to the collection of usage data for analytics.',
  DEFAULT_FILE: {
    "/postcss.config.js": {
      "code": "export default {\n  plugins: {\n    tailwindcss: {},\n    autoprefixer: {},\n  },\n};"
    },
    "/tailwind.config.ts": {
      "code": "import type { Config } from 'tailwindcss';\n\nconst config: Config = {\n  content: [\n    \"./index.html\",\n    \"./src/**/*.{js,ts,jsx,tsx}\"\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n};\n\nexport default config;"
    },
    "/project.lua":{ "code": "print('Hello, World!')" },
    // '/pages/_app.js': {
    //   code: "import '../styles/globals.css';\n\nfunction MyApp({ Component, pageProps }) {\n  return <Component {...pageProps} />;\n}\n\nexport default MyApp;",
    // },
    // '/pages/index.js': {
    //   code: 'export default function Home() {\n  return (\n    <div className="flex min-h-screen items-center justify-center">\n      <h1 className="text-3xl font-bold">Welcome to Next.ts</h1>\n    </div>\n  );\n}',
    // },
    // '/components/Navbar.jsx': {
    //   code: 'export default function Navbar() {\n  return (\n    <nav className="p-4 bg-gray-800 text-white">\n      <h1 className="text-lg font-semibold">Next.ts App</h1>\n    </nav>\n  );\n}',
    // },
    // '/hooks/useExample.js': {
    //   code: 'import { useState, useEffect } from \'react\';\n\nexport default function useExample() {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    setData("Hello from custom hook");\n  }, []);\n\n  return data;\n}',
    // },
  },
  DEPENDANCY: {
    tailwindcss: '^3.4.1',
    postcss: '^8',
    autoprefixer: '^10.0.0',
    arweave: '^1.15.5',
    axios: '^1.7.9',
    '@permaweb/aoconnect': '^0.0.63',
    'framer-motion': '^12.0.6',
    'locomotive-scroll': '^5.0.0-beta.21',
    'lucide-react': '^0.474.0',
    "esbuild-wasm": "^0.24.2",
    "@rollup/wasm-node": "^4.34.1",
  },

  //   DEFAULT_FILE: {
  //       '/lib/arkit.ts': {
  //       code: `<!DOCTYPE html>
  //         <html lang="en">
  //         <head>
  //           <meta charset="UTF-8">
  //           <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //           <title>Document</title>
  //           <script src="https://cdn.tailwindcss.com"></script>
  //           <link rel="preconnect" href="https://fonts.googleapis.com">
  //           <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  //           <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  //         </head>
  //         <body class="font-['Inter']">
  //           <div id="root"></div>
  //         </body>
  //         </html>`,
  //     },
  //     '/App.css': {
  //       code: `
  // @tailwind base;
  // @tailwind components;
  // @tailwind utilities;

  // @layer base {
  //   :root {
  //     --background: 0 0% 100%;
  //     --foreground: 240 10% 3.9%;
  //     --card: 0 0% 100%;
  //     --card-foreground: 240 10% 3.9%;
  //     --popover: 0 0% 100%;
  //     --popover-foreground: 240 10% 3.9%;
  //     --primary: 240 5.9% 10%;
  //     --primary-foreground: 0 0% 98%;
  //     --secondary: 240 4.8% 95.9%;
  //     --secondary-foreground: 240 5.9% 10%;
  //     --muted: 240 4.8% 95.9%;
  //     --muted-foreground: 240 3.8% 46.1%;
  //     --accent: 240 4.8% 95.9%;
  //     --accent-foreground: 240 5.9% 10%;
  //     --destructive: 0 84.2% 60.2%;
  //     --destructive-foreground: 0 0% 98%;
  //     --border: 240 5.9% 90%;
  //     --input: 240 5.9% 90%;
  //     --ring: 240 5.9% 10%;
  //     --radius: 0.75rem;
  //   }

  //   .dark {
  //     --background: 240 10% 3.9%;
  //     --foreground: 0 0% 98%;
  //     --card: 240 10% 3.9%;
  //     --card-foreground: 0 0% 98%;
  //     --popover: 240 10% 3.9%;
  //     --popover-foreground: 0 0% 98%;
  //     --primary: 0 0% 98%;
  //     --primary-foreground: 240 5.9% 10%;
  //     --secondary: 240 3.7% 15.9%;
  //     --secondary-foreground: 0 0% 98%;
  //     --muted: 240 3.7% 15.9%;
  //     --muted-foreground: 240 5% 64.9%;
  //     --accent: 240 3.7% 15.9%;
  //     --accent-foreground: 0 0% 98%;
  //     --destructive: 0 62.8% 30.6%;
  //     --destructive-foreground: 0 0% 98%;
  //     --border: 240 3.7% 15.9%;
  //     --input: 240 3.7% 15.9%;
  //     --ring: 240 4.9% 83.9%;
  //   }
  // }

  // @layer base {
  //   * {
  //     @apply border-border;
  //   }
  //   body {
  //     @apply bg-background text-foreground;
  //   }
  // }

  // .animate-in {
  //   animation: animate-in 0.5s ease-out;
  // }

  // @keyframes animate-in {
  //   from {
  //     opacity: 0;
  //     transform: translateY(10px);
  //   }
  //   to {
  //     opacity: 1;
  //     transform: translateY(0);
  //   }
  // }`,
  //     },
  //     '/tailwind.config.ts': {
  //       code: `
  //             /** @type {import('tailwindcss').Config} */
  // module.exports = {
  //   content: [
  //     "./src/**/*.{js,jsx,ts,tsx}",
  //   ],
  //   theme: {
  //     extend: {},
  //   },
  //   plugins: [],
  // }`,
  //     },
  //     '/postcss.config.ts': {
  //       code: `/** @type {import('postcss-load-config').Config} */
  // const config = {
  //   plugins: {
  //     tailwindcss: {},
  //   },
  // };

  // export default config;
  // `,
  //     },
  //   },
  //   DEPENDANCY: {
  //     postcss: '^8',
  //     tailwindcss: '^3.4.1',
  //     autoprefixer: '^10.0.0',
  //     uuid4: '^2.0.3',
  //     'tailwind-merge': '^2.4.0',
  //     'tailwindcss-animate': '^1.0.7',
  //     'lucide-react': '^0.469.0',
  //     'react-router-dom': '^7.1.1',
  //     'framer-motion': '^12.0.6',
  //     'locomotive-scroll': '^5.0.0-beta.21',
  //     '@permaweb/aoconnect': '^0.0.63',
  //     arweave: '^1.15.5',
  //     axios: '^1.7.9',
  //     'class-variance-authority': '^0.7.0',
  //     clsx: '^2.0.0',
  //     '@tailwindcss/typography': '^0.5.10',
  //   },

  PRICING_DESC:
    'Start with a free account to speed up your workflow on public projects or boost your entire team with instantly-opening production environments.',
  PRICING_OPTIONS: [
    {
      name: 'Basic',
      tokens: '50K',
      value: 50000,
      desc: 'Ideal for hobbyists and casual users for light, exploratory use.',
      price: 4.99,
    },
    {
      name: 'Starter',
      tokens: '120K',
      value: 120000,
      desc: 'Designed for professionals who need to use Bolt a few times per week.',
      price: 9.99,
    },
    {
      name: 'Pro',
      tokens: '2.5M',
      value: 2500000,
      desc: 'Designed for professionals who need to use Bolt a few times per week.',
      price: 19.99,
    },
    {
      name: 'Unlimted (License)',
      tokens: 'Unmited',
      value: 999999999,
      desc: 'Designed for professionals who need to use Bolt a few times per week.',
      price: 49.99,
    },
  ],
};
