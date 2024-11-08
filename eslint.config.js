import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier'; // Prettier config for ESLint
import prettierPlugin from 'eslint-plugin-prettier'; // Prettier plugin

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error', // Enforce Prettier formatting as ESLint errors
      'max-len': ['error', { code: 100 }], // Add this line to set your desired line length
    },
  },
  prettier, // Disable ESLint rules that conflict with Prettier
];
