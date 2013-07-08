/**
 * Created with JetBrains WebStorm.
 * User: bbulic
 * Date: 27.03.13.
 * Time: 14:47
 * To change this template use File | Settings | File Templates.
 */

define(['backbone', "underscore"], function (Backbone, _) {
    'use strict';

    // getters
    var TimeClockModel = Backbone.Model.extend({
        initialize: function () {
            this.Id             = this.get("Id");
            this.Date           = this.get("Date");
            this.ClockInTime    = this.get("Time_In_Txt");
            this.ClockOutTime   = this.get("Time_Out_Txt");
            this.DayOfWeek      = this.get("Day_of_Week");
        }
    });

    return TimeClockModel;
});