module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    },
    jest: {
      version: 27
    }
  },
  plugins: ['simple-import-sort', 'jest', 'testing-library'],
  env: {
    browser: true,
    amd: true,
    node: true,
    "jest/globals": true
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        tabWidth: 2,
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'none',
        bracketSameLine: false
      },
      { usePrettierrc: false }
    ],
    'import/no-extraneous-dependencies': ['error', { peerDependencies: true }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        shorthandFirst: true,
        callbacksLast: true,
        reservedFirst: ['key', 'ref']
      }
    ],
    "react/function-component-definition": [
      'error',
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function"
      },
    ],
    'no-underscore-dangle': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@mui/icons-material',
            message: 'Please use default @mui/icons-material/* import instead.'
          },
          {
            name: '@mui/material',
            message: 'Use default imports from @mui/material/<Component> '
          }
        ],
        patterns: [
          {
            group: ['@mui/*/*/*', '!@mui/material/test-utils/*'],
            message: 'Do not use the third level imports'
          }
        ]
      }
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],
    'func-names': 'error'
  },
  overrides: [
    {
      files: [
        '**/__tests__/(unit|integration)/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
        '**/__mocks__/**/*.[jt]s?(x)'
      ],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended', 'plugin:storybook/recommended']
    }
  ]
};
