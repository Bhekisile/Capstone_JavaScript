module.exports = {
  moduleFileExtensions: ['js'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  resolver: 'jest-webpack-resolver',
  testEnvironment: 'jest-environment-jsdom',
};