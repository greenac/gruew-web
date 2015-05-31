require.config({
    baseUrl: 'public/js',
    paths: {
        jquery      : 'lib/jquery-2.1.4',
        bootstrap   : 'bootstrap/js/bootstrap',
        underscore  : 'lib/underscore',
        handlebars  : 'lib/handlebars',
        facebook    : '//connect.facebook.net/en_US/sdk',
        fbHandler   : 'fbHandler',
        eventTags   : 'eventTags',
        constants   : 'constants',
        fbUser      : 'fbUser'
    },

    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'Handlebars'
        },

        underscore: {
            exports: '_'
        },

        handlebars: {
            exports: 'Handlebars'
        },

        facebook: {
            exports: 'FB'
        }
    }
});

require(['fb']);
require(['init']);