$(function(){
  // FIXME: escondemos el tab de UserVoice
  setTimeout(function() {
    $('#uvTab').hide();
  }, 1000);


 // clean_array(array)
  module("Clean Array Function Test");
  test("Delete duplicates and empty", function()
  {
    result = clean_array(['hola', 'hola', 'mundo']);
    equals( result.length, 2, 'Duplicates deleted');
    result = clean_array(['hola', '', 'mundo']);
    equals( result.length, 2, 'Empty deleted');
  });

  // message_disabled()
  module("Message button");
  test("Disabled and Enable", function()
  {
    message_disabled();
    result = $('#message_submit').is(':disabled');
    ok( result, 'Succesfully disabled');
  // message_enable()
    var body = 'este texto tiene 30 caracteres';
    $('#message_body').attr('value', body);
    $('#message_body').trigger('keyup');
    var recipients = '3455555555 \n 99999999 \n 099444444';
    $('#message_recipients').attr('value', recipients);
    $('#message_recipients').trigger('keyup');
    // rellenando todos los campos se habilita
    result = $('#message_submit').is(':disabled');
    ok( !result, 'Succesfully enable');
  });

  // charcount de message_body
  module("message_body charcount");
  test("30 and 155 chars", function()
  {
    var string1 = 'este texto tiene 30 caracteres';
    $('#message_body').attr('value', string1);
    $('#message_body').trigger('keyup');
    equals( $('#counter').html(), 30, 'succesfully counted');
    var string2 = 'Este texto tiene 155 caracteres: Vamos a conquistar el mundo con armas de difusion masiva, preparense para la llegada de la democracia real.  Bla bla bla. ';
    $('#message_body').attr('value', string2);
    $('#message_body').trigger('keyup');
    equals( $('#counter').html(), -15, 'Succesfully counted');
    equals( $('#counter').attr('class'), 'wrong-count', 'Succesfully classed');
  });

  module("message_recipients telephone count");
  test('Counter', function() 
  {
    var string = '3455555555 \n 99999999 \n 099444444';
    $('#message_recipients').attr('value', string);
    $('#message_recipients').trigger('keyup');
    ok( $('#rate span').html() == "0.15 €", 'Succesfully rated');
  });


});
