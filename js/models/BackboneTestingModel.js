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
    var BackboneTestingModel = Backbone.Model.extend({
        urlRoot: '/rest/cloud/BackboneTesting'
    });

    BackboneTestingModel.DefaultUser = {
        "EmployeeNumber": "001",
        "Id": "28902ae038ce43c0bfbff78dad1bad5a",
        "Name": "Alexander Graham Bell AGB"
    };

    return BackboneTestingModel;
});