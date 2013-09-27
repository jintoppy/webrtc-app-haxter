define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap',
  'views/sidebar/SidebarView',
  'domain/MessageBus',
  'domain/Repository',
  'services/WebRTCService',
  'text!templates/home/homeTemplate.html'
], function($, _, Backbone, Bootstrap, SidebarView, MessageBus, Repository, WebRTCService, homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#page"),

    events: {
    },

    initialize: function(){
    },

    render: function(){
      
      this.$el.html(homeTemplate);

      var sidebarView = new SidebarView();
      sidebarView.render();
 
    }


  });

  return HomeView;
  
});
