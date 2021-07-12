const importRules = require('@fuelrats/eslint-config/core/plugin-import')
const importExtensions = require('@fuelrats/eslint-config/util/importExtensions')

module.exports = {
  env: {
    browser: true,
    commonjs: true,
  },
  extends: [
    '@fuelrats/eslint-config',
    '@fuelrats/eslint-config/plugins/fuelrats',
    '@fuelrats/eslint-config-react',
    'plugin:@next/next/recommended',
  ],
  globals: {
    $$BUILD: 'readonly',
  },
  rules: {
    'import/order': ['error', {
      ...importRules.rules['import/order'][1],
      'newlines-between': 'always',
    }],
    'jsdoc/require-jsdoc': ['off'],
    '@next/next/link-passhref': ['off'], // This rule is broken so just ignore it for now.
  },
  settings: {
    'import/ignore': [
      '.worker.js$',
    ],
    'import/resolver': {
      node: {
        extensions: importExtensions,
      },
      alias: {
        map: [['~', './src']],
        extensions: importExtensions,
      },
    },
  },
  overrides: [
    {
      files: ['*.worker.js'],
      env: {
        browser: false,
        commonjs: false,
        worker: true,
      },
    },
    {
      files: ['src/pages/**/*.js'],
      rules: {
        '@fuelrats/default-export-matches-module-name': ['off'], // Disabled in pages dir as it becomes difficult to stick to module names
      },
    },
  ],
}
