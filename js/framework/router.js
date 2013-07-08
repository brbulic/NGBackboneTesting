/**
 * Created with JetBrains WebStorm.
 * User: bbulic
 * Date: 27.03.13.
 * Time: 11:35
 * To change this template use File | Settings | File Templates.
 */

/*global define:false */
define(['backbone', 'jquery', 'views/MainView', 'views/NewEdit'], function (Backbone, $, MainView, NewEdit) {
    'use strict';

    var Router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'edit' : 'edit',
            'new' : 'edit'
        }
    }),
        startHistory = function () {
            var router = new Router();
            router.on('route:home', function () {
                var mainView = new MainView();
                mainView.render();
            });
            router.on('route:edit', function () {
                var newEdit = new NewEdit();
                newEdit.render();
            });
            Backbone.history.start();
        };

    return {
        startHistory: startHistory
    };
});