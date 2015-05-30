require.config({
    baseUrl: 'public/js',
    paths: {
        jquery      : 'lib/jquery',
        bootstrap   : 'lib/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});

require(['init']);