Router.configure ({
  layoutTemplate: 'layoutBase',
  loadingTemplate: 'loading'
});

Router.map (function () {
  this.route ("home", {path: '/'});

  this.route ("listUsers", {
    path: '/users',
    waitOn: function() {
      Meteor.subscribe ("allUsers")
    }
  });

  this.route ("addUser", {
    path: '/users/add'
//    waitOn: function() {
//      Meteor.subscribe ("allUsers")
//    }
  });
});

Router.onBeforeAction ('loading');
//Router.onBeforeAction (requireLogin, {only: 'postSubmit'});
/*Router.onBeforeAction (function () {
 Errors.clearSeen ()
 });*/
