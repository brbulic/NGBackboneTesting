require.config({
    baseUrl: 'js',
    paths: {
        underscore: 'vendor/underscore',
        backbone: 'vendor/backbone',
        modernizr: 'vendor/modernizr-2.6.2.min'
    },
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    }
});

require(['app/app', 'jquery', 'backbone'], function (app, $, Backbone) {
    'use strict';

    Backbone.emulateHTTP = true;

    (function () {

        var proxiedSync = Backbone.sync;

        Backbone.sync = function (method, model, options) {
            options || (options = {});

            if (!options.crossDomain) {
                options.crossDomain = true;
            }

            return proxiedSync(method, model, options);
        };
    })();

    $.ajaxPrefilter(function (options, originalOption, jqXHR) {
        options.url = 'https://api.intra.neogov.net:443' + options.url;
        options.beforeSend = function (jqXHR) {
            jqXHR.setRequestHeader('Authorization', 'Basic YmJ1bGljQGhyY2xvdWQuY29tOkFuaW1lMTMzNw==');
            jqXHR.setRequestHeader('Content-Type', 'application/json');
        };
    });

    app.initialize();
});