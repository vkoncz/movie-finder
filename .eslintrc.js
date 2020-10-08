// @ts-check

/**@type {import('prettier').Options} */
const prettierConfig = {
  endOfLine: 'lf',
  arrowParens: 'avoid',
  trailingComma: 'all',
  printWidth: 120,
  singleQuote: true,
};

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: 'react-app',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['warn', prettierConfig],
    complexity: ['warn', 10],
  },
};
