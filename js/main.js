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

require(['app/app', 'jquery', 'backbone','underscore'], function (App, $, Backbone, _) {
    'use strict';

    $.fn.serializeObject = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    $.ajaxPrefilter(function (options, originalOption, jqXHR) {
        options.url = 'https://api.qa.neogov.net' + options.url;
        options.crossDomain = true;
        options.headers = {
            "Content-Type" : "application/json"
        };
        options.beforeSend = function (jqXHR) {
            jqXHR.setRequestHeader('Authorization', 'Basic YWxleGFuZGVyZ2JAbmVvZ292Lm5ldDp3ZWxjb21l');
        };
    });

    var currentApp = new App();
    window.App = window.App || currentApp;
    currentApp.router.startHistory();
});