const { rules: importRules, settings: importSettings } = require('@fuelrats/eslint-config/core/plugin-import')
const importExtensions = require('@fuelrats/eslint-config/util/importExtensions')

module.exports = {
  env: {
    browser: true,
  },
  extends: [
    '@fuelrats/eslint-config/typescript',
    '@fuelrats/eslint-config/plugins/fuelrats',
    '@fuelrats/eslint-config-react/typescript',
    'plugin:@next/next/recommended',
  ],
  rules: {
    'import/order': ['error', {
      ...importRules['import/order'][1],
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
      ...importSettings['import/resolver'],
      alias: {
        map: [['~', './src']],
        extensions: importExtensions,
      },
    },
  },
  overrides: [
    {
      files: ['src/pages/**/*'],
      rules: {
        '@fuelrats/default-export-matches-module-name': ['off'], // Disabled in pages dir as it becomes difficult to stick to module names
      },
    },
  ],
}
