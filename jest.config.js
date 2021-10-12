
const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
    preset: 'ts-jest',
    transform: {
        ...tsjPreset.transform,
      },
    roots: ['<rootDir>/src'],
    verbose: true,
    testEnvironment: 'jsdom',
    collectCoverage: true,
    coverageDirectory: 'coverage',
    testPathIgnorePatterns: [
        "/node_modules/"
    ]
};