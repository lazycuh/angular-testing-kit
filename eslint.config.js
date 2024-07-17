import eslintConfigBase from '@lazycuh/eslint-config-base';

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...eslintConfigBase.map(config => ({
    ...config,
    files: ['**/src/**/*.ts']
  }))
];
