module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'airbnb',
        'prettier/react',
        'prettier',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 11,
        sourceType: 'module'
    },
    plugins: [
        'react',
        'prettier',
        'react-hooks',
    ],
    rules: {
      'prettier/prettier':  ['error', {"singleQuote": true }],
      'react/jsx-filename-extension': [
        'warn',
        { extensions: ['.jsx', '.js']}
      ],
      'import/prefer-default-export': 'off',
      'no-param-reassign': 'off',
      'no-console': ["error", {allow: ["tron"]}],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    }
};
