module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'react-app',
    'standard-with-typescript'
  ],
  overrides: [{
    files: ['*.ts', '*.tsx'],
    extends: ['plugin:react/jsx-runtime', 'plugin:react/recommended'],
    rules: {
      'react/react-in-jsx-scope': 0,
      '@typescript-eslint/restrict-template-expressions': 'warn'
    }
  }],
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
        requireLast: true
      }
    }],
    '@typescript-eslint/explicit-function-return-type': 'warn',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'react/react-in-jsx-scope': 'off'
  }
};
