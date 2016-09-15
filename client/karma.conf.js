const testPattern = 'src/test/js/**/*Spec.js'
module.exports = function ( config ) {
    config.set( {
                    browsers: ['PhantomJS'],
                    frameworks: ['jasmine'],
                    files: [
                        {pattern: testPattern, watched: false}
                    ],
                    preprocessors: {
                        testPattern: ['webpack']
                    },
                    webpack: {},

                    reporters: ['progress'],
                    singleRun: true

                } );
};