define([
  'jquery',
  'backbone',
  'views/home/HomeView',
  'domain/Repository',
  'domain/MessageBus',
  'text!templates/login/loginTemplate.html'
], function($, Backbone, HomeView, Repository, MessageBus, loginTemplate){

  var LoginView = Backbone.View.extend({

    el: $("#page"),

    events:{
    },

    initialize: function(){
    },

    render: function(){
      this.$el.html(loginTemplate);
    }

  });

  return LoginView;
  
});
