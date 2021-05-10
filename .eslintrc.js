module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    'no-console': 0,
  },
};
