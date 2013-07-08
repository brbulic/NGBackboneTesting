/**
 * Created with JetBrains WebStorm.
 * User: bbulic
 * Date: 27.03.13.
 * Time: 16:46
 * To change this template use File | Settings | File Templates.
 */

/*global define:false */
define(['backbone', 'jquery', 'models/TimeClockModel'], function (Backbone, $, TimeClockModel) {
    'use strict';

    var TimeClockCollection = Backbone.Collection.extend({
        url: '/rest/cloud/Time_Clock?perpage=100&pagenumber=1',
        model: TimeClockModel
    });

    return TimeClockCollection;
});