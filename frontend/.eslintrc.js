module.exports = {
  parser: '@typescript-eslint/parser',
  // root: true,
  extends: ['plugin:@typescript-eslint/recommended'],
  plugins: ['simple-import-sort', 'import'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  overrides: [
    {
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        indent: ['error', 2],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        '@typescript-eslint/comma-dangle': [
          'error',
          {
            arrays: 'never',
            objects: 'never',
            imports: 'never',
            exports: 'never',
            functions: 'never',
          },
        ],
      },
      files: ['*.ts', '*.tsx'],
    },
  ],
};
