Template.header.helpers({
});


//solução do macaco!!! não funciona nada bem...
Template.header.rendered = function() {
  $('#login-buttons-password').text('entrar');
  $('#login-username').attr('placeholder', 'nome de utilizador');
  $('#login-password').attr('placeholder', 'palavra chave');
};