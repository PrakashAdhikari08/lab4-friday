module.exports = {
    reporters: [
        'default',
        ['jest-junit', { outputDirectory: 'reports',
            outputName: 'report.xml' }],
    ],
};