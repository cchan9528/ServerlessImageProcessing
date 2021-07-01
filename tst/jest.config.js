const path = require('path');

require('dotenv').config({
    path : path.resolve(path.join(__dirname, 'test.env'))});

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    passWithNoTests: true,
    verbose: true,
    modulePaths: [
        path.normalize(path.join(__dirname, '..')),
    ]
};