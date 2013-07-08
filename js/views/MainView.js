/**
 * Created with JetBrains WebStorm.
 * User: bbulic
 * Date: 27.03.13.
 * Time: 15:05
 * To change this template use File | Settings | File Templates.
 */
/*global define:false */

define(['backbone', 'jquery', 'underscore', 'models/TimeClockModel', 'models/TimeClockCollection'], function (Backbone, $, _, TimeClockModel, TimeClockCollection) {
    'use strict';
    var MainView = Backbone.View.extend({
        el: '.page',
        render: function () {
            var self = this;
            var cloudObjects = new TimeClockCollection();
            cloudObjects.fetch({
                success: function (newUsers) {
                    var template = _.template($('#user-list-template').html(), {users: newUsers.models});
                    self.$el.html(template);
                },
                error: function (err, xhr, options) {
                    console.log("FAIL!");
                    console.log(err + " " + xhr + " " + options);
                }
            });
        }
    });

    return MainView;
});

/*
 var users = new Users();
 users.fetch({
 success: function (users) {
 var template = _.template($('#user-list-template').html(), {users: users.models});
 base.$el.html(template);
 }
 });
 */