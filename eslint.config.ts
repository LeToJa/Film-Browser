import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import prettier from 'eslint-plugin-prettier'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: {
      js,
      prettier
    },
    extends: [
      'js/recommended',
      'plugin:prettier/recommended',
    ],
    languageOptions: { globals: globals.browser },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
])
