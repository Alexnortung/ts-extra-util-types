module.exports = {
    root: true,
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
        // tsconfigRootDir: __dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        quotes: [
            'warn',
            'single',
            {
                allowTemplateLiterals: true,
            },
        ],
        eqeqeq: ['error', 'always'],
        'no-return-assign': ['error', 'always'],
        'no-cond-assign': ['error', 'always'],
    },
}
