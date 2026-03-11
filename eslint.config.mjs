import globals from 'globals';
import pluginJs from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default [
  pluginJs.configs.recommended,
  configPrettier,
  {
    files: ['src/**/*.js'],
    languageOptions: { globals: globals.node },
    plugins: {
      prettier,
    },
    rules: {
      semi: 'error',
      'no-unused-vars': ['error', { args: 'none' }],
      'no-undef': 'error',
      'prettier/prettier': 'error',
    },
  },
];
