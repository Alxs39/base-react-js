import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';

export default [
  {
    ignores: [
      // Dependencies
      'node_modules/**',
      '.pnpm-store/**',
      
      // Build outputs
      'dist/**',
      'build/**',
      '**/build/**',
      'apps/*/build/**',
      '.turbo/**',
      
      // Cache directories
      '.cache/**',
      '.eslintcache',
      
      // Environment files
      '.env',
      '.env.local',
      '.env.development',
      '.env.test',
      '.env.production',
      
      // Logs
      '*.log',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      'pnpm-debug.log*',
      
      // Coverage directory
      'coverage/**',
      
      // Public assets
      'public/**',
      
      // Generated files
      '*.map',
      '.react-router/**',
      '**/.react-router/**',
      
      // Lock files
      'package-lock.json',
      'yarn.lock',
      'pnpm-lock.yaml',
      
      // IDE files
      '.vscode/**',
      '.idea/**',
      '*.swp',
      '*.swo',
      
      // OS generated files
      '.DS_Store',
      '.DS_Store?',
      '._*',
      '.Spotlight-V100',
      '.Trashes',
      'ehthumbs.db',
      'Thumbs.db',
      
      // Minified files
      '*.min.js',
    ],
  },

  js.configs.recommended,

  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // React Refresh
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // React specific
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // Code quality
      'prefer-const': 'error',
      'no-var': 'error',
      'no-console': 'warn',

      // Style rules - strict formatting
      'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': false }],
      'semi': ['error', 'always'],
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'space-before-blocks': 'error',
      'space-infix-ops': 'error',
      'space-unary-ops': 'error',
      'keyword-spacing': 'error',
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
      'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
      'curly': ['error', 'all'],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  {
    files: ['**/*.config.js'],
    rules: {
      'no-console': 'off',
    },
  },

  {
    files: ['**/routes/**', '**/src/routes/**'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
];