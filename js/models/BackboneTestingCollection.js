/**
 * Created with JetBrains WebStorm.
 * User: bbulic
 * Date: 27.03.13.
 * Time: 16:46
 * To change this template use File | Settings | File Templates.
 */

/*global define:false */
define(['backbone', 'jquery', 'models/BackboneTestingModel'], function (Backbone, $, BackboneTestingModel) {
    'use strict';

    var BackboneTestingCollection = Backbone.Collection.extend({
        url: '/rest/cloud/BackboneTesting?perpage=100&pagenumber=1',
        model: BackboneTestingModel
    });

    return BackboneTestingCollection;
});