/**
 * Created with JetBrains WebStorm.
 * User: bbulic
 * Date: 27.03.13.
 * Time: 11:35
 * To change this template use File | Settings | File Templates.
 */

/*global define:false */
define(['backbone', 'jquery'], function (Backbone, $) {
    'use strict';

    var Router = Backbone.Router.extend({
        routes: {
            '': 'home'
        }
    });
    var startHistory = function (baseView) {
        var router = new Router();
        router.on('route:home', function () {

            if (baseView === undefined) {
                $('#table-view').html("Hello world! Give me a default view in order to use!");
            } else {
                baseView.render();
            }
        });

        Backbone.history.start();
    };

    return {
        startHistory: startHistory
    };
});