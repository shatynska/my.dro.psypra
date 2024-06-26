module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    '@feature-sliced',
    '@feature-sliced/eslint-config/rules/import-order/experimental',
    'plugin:prettier/recommended',
    'prettier',
  ],
  ignorePatterns: [
    'dist',
    'notes',
    '.eslintrc.cjs',
    'tailwind.config.ts',
    'postcss.config.js',
    'vite.config.ts',
    'vitest.config.ts',
    'kubb.config.js',
    'src/shared/api/generated',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'Latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  plugins: ['react', 'react-refresh', '@typescript-eslint', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/require-default-props': [
      'warn',
      {
        functions: 'defaultArguments',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.config*',
          '**/*.test.*',
          '**/*.spec.*',
          '**/mock*/**',
          '**/vitest*',
        ],
      },
    ],
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-param-reassign': ['error', { props: false }],
  },
  overrides: [
    {
      files: ['src/shared/ui/*'],
      rules: {
        'react/prop-types': 'off',
        'react-refresh/only-export-components': 'off',
      },
    },
  ],
};
