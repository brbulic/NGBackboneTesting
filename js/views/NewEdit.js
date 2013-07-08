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
    'text!templates/edit.html'], function (Backbone, $, _, EditView) {
    'use strict';

    var NewEdit = Backbone.View.extend({
        el: '#table-view',
        render: function () {
            this.$el.html(EditView);
        }
    });

    return NewEdit;
});