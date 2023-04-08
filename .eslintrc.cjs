module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'react-app',
    'standard-with-typescript',
    'plugin:react/jsx-runtime'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['./tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'error',
    'semi': 'off',
    '@typescript-eslint/semi': [2, 'always'],
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/restrict-template-expressions': 'warn',
  }
}
