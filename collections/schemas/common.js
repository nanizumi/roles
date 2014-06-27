Schema = {}; //new global var
Schema.contact = new SimpleSchema({
  name: {
    type: String,
    label: 'Nome',
    max: 50
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "E-mail"
  },
  message: {
    type: String,
    label: "Mensagem",
    max: 1000
  }
});

Schema.userProfile = new SimpleSchema({
  name: {
    type: String,
    label: 'Nome completo',
    max: 64
  }
});

Schema.user = new SimpleSchema({
  username: {
    type: String,
    label: 'Username',
    max: 64
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "E-mail"
  },
  password: {
    type: String,
    label: "Password"
  },
  profile: {
    type: Schema.userProfile,
    label: 'Dados adicionais'
  }
});