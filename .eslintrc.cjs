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
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/jsx-uses-vars': 'warn',
    semi: 'off',
    '@typescript-eslint/semi': [2, 'always'],
    '@typescript-eslint/member-delimiter-style': ['warn', {
      multiline: {
        delimiter: 'semi',
        requireLast: true
      },
      singleline: {
        delimiter: 'semi',
        requireLast: true,
      }
    }],
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/restrict-template-expressions': 'warn',
    'no-multiple-empty-lines': ["error", { "max": 2, "maxEOF": 1 }]
  }
}
