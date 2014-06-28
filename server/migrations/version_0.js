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

    var jonhId = Accounts.createUser({
      'username' : 'jon.doe',
      'email' : 'john@doe.com',
      'password' : 'abc123', //encrypted automatically
      'profile': {
        'name': 'Jonh Doe'
      }
    });

    Roles.addUsersToRoles(jonhId, ['normal']);

    var testId = Accounts.createUser({
      'username' : 'test',
      'email' : 'test@home.com',
      'password' : '123123', //encrypted automatically
      'profile': {
        'name': 'Test User'
      }
    });

    Roles.addUsersToRoles(testId, ['professor']);

    AppControl.insert({'status': 'initialized'});
    AppControl.insert({'version': 0});
  }
});