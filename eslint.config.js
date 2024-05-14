// @ts-check
import createEslintConfig from 'talljack-eslint-config'

export default createEslintConfig({
  typescript: true,
  vue: true,
  formatters: true,
  markdown: true,
  test: true,
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
  },
  ignores: ['README.md'],
})
