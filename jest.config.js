export default {
  roots: ['<rootDir>'],
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'vue'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/__tests__/components',
    '<rootDir>/src/__tests__/directives',
  ],
  moduleNameMapper: {
    '@vue/apollo-composable': [
      '<rootDir>/node_modules/@vue/apollo-composable/dist/index.js',
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!(@vue/apollo-composable)/)'],
}
