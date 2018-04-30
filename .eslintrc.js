module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    'shared-node-browser': true,
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0,
    'react/sort-comp': 0,
    'react/no-multi-comp': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-curly-brace-presence': 0,
    'no-underscore-dangle': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-plusplus': 0,
    'import/prefer-default-export': 0,
    'prefer-destructuring': 0,
    'no-use-before-define': ['error', { variables: false }],
    'no-continue': 0,
    'prefer-destructuring': 0,
    'no-param-reassign': 0,
    'global-require': 0,
    'one-var': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],
  },
  overrides: {
    files: ['**.test.js', '**/__mocks__/**.js'],
    rules: {
      // See https://github.com/benmosher/eslint-plugin-import/issues/458
      'import/no-extraneous-dependencies': 0,
    },
    env: {
      node: true,
      jest: true,
    },
  },
};
