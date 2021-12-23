import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  rootDir: '../',
  transform: {
    '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  },
  testMatch: [
    '**/src/**/*.spec.(ts|tsx)'
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js'
  ],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/jest/mocks/style.ts'
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest/enzyme-config.ts'
  ]
}

export default config;
