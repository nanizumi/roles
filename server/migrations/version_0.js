//insert fixtures here
Meteor.startup(function () {

  if(AppControl.find({'status':'initialized'}).count() === 0 )
  {
    Meteor._debug('importing database v0');

    var adminId = Accounts.createUser({
      'username' : 'admin',
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