module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jest: true,
    mocha: true,
  },
  plugins: [
    'eslint-comments',
  ],
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    /* plugins: import */
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',

    /* eslint */
    'no-bitwise': 'off',
    'func-names': ['error', 'never', { generators: 'as-needed' }],
    'no-param-reassign': ['error', { props: false }],
    'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
    'max-len': [
      'error',
      {
        code: 200,
        comments: 300,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    radix: ['error', 'as-needed'],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1, maxEOF: 1 }],
    'no-labels': ['error', { allowLoop: true }],
    'prefer-destructuring': 'off',
  },
};
