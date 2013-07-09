/**
 * Created with JetBrains WebStorm.
 * User: bbulic
 * Date: 27.03.13.
 * Time: 15:05
 * To change this template use File | Settings | File Templates.
 */
/*global define:false, window:false, console:false */

define(['backbone',
    'jquery',
    'underscore',
    'models/BackboneTestingModel',
    'models/BackboneTestingCollection',
    'text!templates/table.html'], function (Backbone, $, _, BackboneTestingModel, BackboneTestingCollection, tableTemplate) {
    'use strict';
    var MainView = Backbone.View.extend({
        el: '.page',
        events : {
            'click #edit_object' : 'transferUser'
        },
        render: function () {
            var self = this;
            var cloudObjects = new BackboneTestingCollection();
            cloudObjects.fetch({
                success: function (newUsers) {
                    var template = _.template(tableTemplate, {users: newUsers.models});
                    self.models = newUsers.models;
                    self.$el.html(template);
                },
                error: function (err, xhr, options) {
                    console.log("FAIL!");
                    console.log(err + " " + xhr + " " + options);
                }
            });
        },
        transferUser : function (event) {
            var userId = event.currentTarget.getAttribute("data-user-id");
            _.each(this.models, function (element) {
                if (element.get('Id') === userId) {
                    window.App.setTransferObject(element);
                    console.log("Object is: " + element.get('Employee').Name);
                }
            });

            this.off();
            return true;
        }
    });

    return MainView;
});