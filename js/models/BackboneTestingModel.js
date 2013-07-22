/**
 * Created with JetBrains WebStorm.
 * User: bbulic
 * Date: 27.03.13.
 * Time: 14:47
 * To change this template use File | Settings | File Templates.
 */

/*
An example object
{
        "Id": "7ab77aae82e4dc8cdc33ffa8c0b56ea1",
        "Employee": {
            "EmployeeNumber": "001",
            "Id": "28902ae038ce43c0bfbff78dad1bad5a",
            "Name": "Alexander Graham Bell AGB"
        },
        "Title": "Test",
        "Description": "This is a test description",
        "Number": "100"
    }

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