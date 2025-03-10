import globals from "globals";

import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";

// mimic CommonJS variables -- not needed if using CommonJS
// eslint-disable-next-line
// opened issue - https://github.com/mui/mui-public/issues/264
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended});

export default [
  {languageOptions: { globals: globals.node, ecmaVersion: 'latest', sourceType: 'module' }},
  ...compat.extends("airbnb"),
];