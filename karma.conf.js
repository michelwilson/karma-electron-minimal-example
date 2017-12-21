module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        plugins: [
            'karma-jasmine',
            'karma-spec-reporter',
            'karma-electron'
        ],
        reporters: ['spec'],
        browsers: ['Electron'],
        preprocessors: {
            'test/*.js': ['electron']
        },
        client: {
            useIframe: false
        },
        singleRun: true,
        files: [
            'bower_components/angular/angular.js',
            'node_modules/ng-midway-tester/src/ngMidwayTester.js',
            'src/script.js',
            'test/test.js'
        ]
    });
};
