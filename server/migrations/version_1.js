//insert fixtures here
Meteor.startup (function () {

  if (AppControl.find ({'version': 1}).count () < 1) {

    console.log ('importing database v1 - [users]');

    var dataStr = Assets.getText ('user-test.json');
    var dataArray = JSON.parse (dataStr);

    _.each (dataArray, function (elem) {
      console.log ('Add user: ' + elem.username);
      //console.log(elem);

      var newUserId = Accounts.createUser ({
        'username': elem.username,
        'password': elem.password, //encrypted automatically
        'profile': {
          'name': elem.username
        }
      });

      Roles.addUsersToRoles (newUserId, [elem.roles, elem.estado]);

      AppControl.insert ({'version': 1});
    });
  }


});