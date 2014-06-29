//insert fixtures here
Meteor.startup(function () {

  Meteor._debug('importing database v0');

  if(AppControl.find({'status':'initialized'}).count() === 0 )
  {

    var adminId = Accounts.createUser({
      'username' : 'admin1',
      'email' : 'admin@doe.com',
      'password' : '123123', //encrypted automatically
      'profile': {
        'name': 'Administrator'
      }
    });

    Roles.addUsersToRoles(adminId, ['admin']);

    AppControl.insert({'status': 'initialized'});
    AppControl.insert({'version': 0});
  }
});