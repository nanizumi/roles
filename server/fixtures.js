//insert fixtures here
if(AppControl.find().count() === 0 )
{
  //add data to appcontrol

  Accounts.createUser({
    'username' : 'admin',
    'email' : 'admin@doe.com',
    'password' : '123123', //encrypted automatically
    'profile': {
      'name': 'Administrator'
    }
  });

  Accounts.createUser({
    'username' : 'jon.doe',
    'email' : 'john@doe.com',
    'password' : 'abc123', //encrypted automatically
    'profile': {
      'name': 'Jonh Doe'
    }
  });

  Accounts.createUser({
    'username' : 'test',
    'email' : 'test@home.com',
    'password' : '123123', //encrypted automatically
    'profile': {
      'name': 'Test User'
    }
  });

  AppControl.insert({what: 'something'});
}