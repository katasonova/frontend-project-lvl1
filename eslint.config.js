import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import path from 'path';
import { fileURLToPath } from 'url';
import babelParser from '@babel/eslint-parser';

// Resolve __dirname and __filename in ES modules

const __filename = fileURLToPath(import.meta.url); // eslint-disable-line no-underscore-dangle
const __dirname = path.dirname(__filename); // eslint-disable-line no-underscore-dangle

// Initialize FlatCompat with the base directory
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Export the flat configuration
export default [{
  languageOptions: {
    ecmaVersion: 'latest', // Use the latest ECMAScript version
    sourceType: 'module', // Enable ECMAScript modules
    parser: babelParser,
    parserOptions: {
      requireConfigFile: false,
    },
  },
},
js.configs.recommended,
...compat.extends('airbnb'),
];
