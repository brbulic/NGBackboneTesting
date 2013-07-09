/**
 * Created with JetBrains WebStorm.
 * User: bbulic
 * Date: 27.03.13.
 * Time: 10:59
 * To change this template use File | Settings | File Templates.
 */

/*global define:false */
define(['framework/router',
    'views/MainView',
    'views/NewEdit'], function (Router, MainView, NewEdit) {
    'use strict';

    var App = function () {

        var mainView = new MainView();
        var newEdit = new NewEdit();

        var router = new Router(),
            globalOptions = {},
            startHistory = function () {
                router.on('route:home', function () {

                    mainView.render();
                });
                router.on('route:edit', function (id) {
                    var options = {objectId: id};
                    if (window.App.transferObject !== null) {
                        options.review = window.App.transferObject();
                        window.App.setTransferObject(null);
                    }
                    newEdit.render(options);
                });
                Backbone.history.start();
            };

        router.startHistory = startHistory;

        var setUserData = function (userData, userDataKey) {
            if (typeof userDataKey !== 'string' || userDataKey.length === 0) {
                throw 'User data key is empty!';
            }
            if (userData === 'undefined') {
                throw 'User data does not exist!';
            }

            globalOptions[userDataKey] = userData;
        };
        var getUserData = function (userDataKey) {
            if (typeof userDataKey !== 'string' || userDataKey.length === 0) {
                throw 'User data key is empty!';
            }

            if (globalOptions[userDataKey] === 'undefined') {
                return null;
            }

            return globalOptions[userDataKey];
        };

        return {
            router: router,
            setState: setUserData,
            state: getUserData,
            transferObject: function () {
                return getUserData('TransferObjectProperty');
            },
            setTransferObject: function (objectData) {
                setUserData(objectData, 'TransferObjectProperty');
            }
        };
    };

    return App;
});
