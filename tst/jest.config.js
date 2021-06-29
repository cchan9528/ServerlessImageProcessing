const path = require('path');
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    passWithNoTests: true,
    verbose: true,
    modulePaths: [
        path.normalize(path.join(__dirname, '..')),
    ]
};