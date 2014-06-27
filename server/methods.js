Meteor.methods({
  addUser: function (newUser) {
    //TODO: check permissions to add user
    //TODO: check inputs for username availability
    newUserId = Accounts.createUser(newUser);

    return newUserId;
  },

  autoAddUser: function (newUser) {
    //TODO: check permissions to add user
    //TODO: check inputs for username availability
    //newUserId = Accounts.createUser(newUser);

    Meteor._debug( newUser );
  },

  sendEmail: function(doc) {
    // Important server-side check for security and data integrity
    check(doc, Schema.contact);

    // Build the e-mail text
    var text = "Name: " + doc.name + "\n\n"
      + "Email: " + doc.email + "\n\n\n\n"
      + doc.message;

    this.unblock();

    // Send the e-mail
    Email.send({
      to: "test@example.com",
      from: doc.email,
      subject: "Website Contact Form - Message From " + doc.name,
      text: text
    });
  }

});
