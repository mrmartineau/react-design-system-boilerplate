module.exports = {
  testPathIgnorePatterns: [
    '<rootDir>/cypress',
    '<rootDir>/node_modules',
    '<rootDir>/build'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    'jest-styled-components',
    'jest-dom/extend-expect',
    '@testing-library/react/cleanup-after-each'
  ]
}
