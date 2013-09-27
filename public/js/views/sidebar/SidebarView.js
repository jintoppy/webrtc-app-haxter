define([
  'jquery',
  'underscore',
  'backbone',
  'domain/MessageBus',
  'collections/StudentsCollection',
  'models/StudentModel',
  'text!templates/sidebar/sidebarTemplate.html'
], function($, _, Backbone, MessageBus, StudentsCollection, StudentModel, sidebarTemplate){

  var SidebarView = Backbone.View.extend({
    el: $(".sidebar"),

    initialize: function(){
    },

    render: function(){

      var that = this;

      var data = {
        students: that.collection.toJSON()
      };
      
      var compiledTemplate = _.template( sidebarTemplate, data );
    
      $(".sidebar").append(compiledTemplate);
    }

  });

  return SidebarView;
  
});
