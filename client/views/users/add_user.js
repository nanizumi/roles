Template.addUser.events({
  'submit form': function (e) {
    e.preventDefault();

    var user = {
      'username': $(e.target).find('[name=InputUserName]').val(),
      'email': $(e.target).find('[name=InputEmail]').val(),
      'password': $(e.target).find('[name=InputPassword]').val(),
      'profile': {
        'name': $(e.target).find('[name=InputNome]').val()
      }
    };

    //todo: perform validation...

    Meteor.call('addUser', user, function (error, result) {
      if (error) {
        // optionally use a meteor errors package
        if (typeof Errors === "undefined")
          Log.error('Error: ' + error.reason);
        else {
          Errors.throw(error.reason);
        }
      } else {
        Router.go ('listUsers');
        //Router.go ('userDetail', {_id: result});
      }
    });

//    var testId = Accounts.createUser({
//      'username' : 'test',
//      'email' : 'test@home.com',
//      'password' : '123123', //encrypted automatically
//      'profile': {
//        'name': 'Test User'
//      }
//    });

  }
});