/**
 * Created with JetBrains WebStorm.
 * User: bbulic
 * Date: 27.03.13.
 * Time: 15:05
 * To change this template use File | Settings | File Templates.
 */
/*global define:false */

define(['backbone',
    'jquery',
    'underscore',
    'text!templates/edit.html',
    'models/BackboneTestingModel'], function (Backbone, $, _, EditView, BackboneTestingModel) {
    'use strict';

    var NewEdit = Backbone.View.extend({
        el: '#table-view',
        events : {
            'submit .submit-form' : 'processData',
            'click .delete' : 'removeUser'
        },
        render: function (options) {
            var self = this;
            this.$el.html(EditView);

            if (!_.isUndefined(options.objectId)) {
                console.log("I recevied object id: " + options.objectId);
            }

            if (!_.isUndefined(options.review)) {
                var template = _.template(EditView, {review : options.review});
                self.user = options.review;
                self.$el.html(template);
            } else {
                self.$el.html(_.template(EditView, {review : null }));
            }
        },
        processData: function (event) {
            var userDetails = $(event.currentTarget).serializeObject(),
                user = new BackboneTestingModel();

            user.setDate();
            userDetails.Employee = BackboneTestingModel.DefaultUser;

            if (userDetails.Id !== 'undefined') {
                user.set({'id' : userDetails.Id});
                delete userDetails.Id;
            }

            var options = {
                success: function (user) {
                    window.App.router.navigate('', {trigger : true});
                },
                error : function (xhrError) {
                    console.log("Ne zvuči ovo na dobro..." + xhrError);
                    window.App.router.navigate('', {trigger : true});
                }
            };

            user.save(userDetails, options);
            return false;
        },
        removeUser : function (event) {
            this.user.destroy({
                success: function () {

                },
                failure : function () {

                }
            });
        }
    });

    return NewEdit;
});