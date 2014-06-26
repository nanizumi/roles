Template.listUsers.helpers ({
  allUsers: function () {
    return Meteor.users.find();
  }
});