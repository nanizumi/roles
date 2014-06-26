Meteor.methods({
  addUser: function (newUser) {
    //TODO: check permissions to add user
    //TODO: check inputs for username availability
    newUserId = Accounts.createUser(newUser);

    return newUserId;
  }
});
