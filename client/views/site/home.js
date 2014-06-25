Template.home.helpers ({
  checkRoles: function () {
    var user = Meteor.userId ();

    if (user) {
      var role = Roles.getRolesForUser (user);

      return role.toString();
    }
    return 'no user...'
  }
});