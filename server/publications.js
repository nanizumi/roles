//publications
Meteor.publish ('allUsers', function () {
  //TODO: secure publication
  return Meteor.users.find();
});
