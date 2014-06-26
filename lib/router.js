Router.configure ({
  layoutTemplate: 'layoutBase',
  loadingTemplate: 'loading'
});

Router.map (function () {
  this.route ("home", {path: '/'});
});

Router.map (function () {
  this.route ("listUsers", {
    path: '/listUsers',
    waitOn: function() {
      Meteor.subscribe ("allUsers")
    }
  });
});

Router.onBeforeAction ('loading');
//Router.onBeforeAction (requireLogin, {only: 'postSubmit'});
/*Router.onBeforeAction (function () {
 Errors.clearSeen ()
 });*/
