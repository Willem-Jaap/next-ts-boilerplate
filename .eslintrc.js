module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021, // Version of ECMAScript
        sourceType: 'module', // Enables ECMAScript modules
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    extends: [
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@next/next/recommended',
    ],
    rules: { 'prettier/prettier': ['error', { endOfLine: 'auto' }] },
};
