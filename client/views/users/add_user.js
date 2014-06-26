Template.addUser.events({
  'submit form': function (e) {
    e.preventDefault();

    var user = {
      'username': $(e.target).find('[name=InputUserName]').val(),
      'password': $(e.target).find('[name=InputPassword]').val()
    }

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