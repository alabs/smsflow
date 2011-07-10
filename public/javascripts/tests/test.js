$(function(){
  // FIXME: escondemos el tab de UserVoice
  setTimeout(function() {
    $('#uvTab').hide();
  }, 1000);


 // clean_array(array)
  module("Clean Array Function Test");
  test("Delete duplicates", function()
  {
    result = clean_array(['hola', 'hola', 'mundo']);
    ok( result.length == 2, 'Duplicates deleted');
  });

  module("Clean Array Function Test");
  test("Delete empty", function()
  {
    result = clean_array(['hola', '', 'mundo']);
    ok( result.length == 2, 'Empty deleted');
  });

  // message_disabled()
  module("Message button");
  test("Disabled", function()
  {
    message_disabled();
    result = $('#message_submit').is(':disabled');
    ok( result, 'Succesfully disabled');
  });

  // message_enable()
  module("Message button");
  test("Enable", function()
  {
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
  test("30 chars", function()
  {
    string = 'este texto tiene 30 caracteres';
    $('#message_body').attr('value', string);
    $('#message_body').trigger('keyup');
    ok( $('#counter').html() == 30, 'succesfully counted');
  });

  module("message_body charcount");
  test("155 chars", function()
  {
    var string = 'Este texto tiene 155 caracteres: Vamos a conquistar el mundo con armas de difusion masiva, preparense para la llegada de la democracia real.  Bla bla bla. ';
    $('#message_body').attr('value', string);
    $('#message_body').trigger('keyup');
    ok( $('#counter').html() == -15, 'Succesfully counted');
    ok( $('#counter').attr('class') == 'wrong-count', 'Succesfully classed');
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
