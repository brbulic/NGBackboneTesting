/**
 * Created with JetBrains WebStorm.
 * User: bbulic
 * Date: 27.03.13.
 * Time: 10:59
 * To change this template use File | Settings | File Templates.
 */

/*global define:false */
define(['framework/router', 'views/MainView'], function (router, MainView) {
    'use strict';
    var app = function () {
        var mView = new MainView();
        // dependency injection BITCH!
        router.startHistory(mView);
    };
    return {
        initialize : app
    };
});
