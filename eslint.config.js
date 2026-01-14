const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ['dist/*'],
  },
  ,
  {
    rules: {
      // This ensures ESLint doesn't fight Prettier's formatting
      'prettier/prettier': ['error', { trailingComma: 'all' }],
    },
  },
]);
