module.exports = {
  rootDir: '../',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/config/tests.config.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@platzi-course-project-ui/components': '<rootDir>/packages/components',
    '@platzi-course-project-ui/components/*': '<rootDir>/packages/components/$1',
    // '@platzi-course-project-ui/icons': '<rootDir>/packages/icons',
    // '@platzi-course-project-ui/icons/*': '<rootDir>/packages/icons/$1'
  },
  modulePathIgnorePatterns: ['dist']
};