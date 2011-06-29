$(function() {
  
  // Ocultar el span de mensajes flash pasado 10 segundos
  $("#flash-notice span, #flash-alert span").fadeOut(30000);
  
  // Poner el foco en el formulario en la página de login y registro
  $("#login-form #user_email, #signup-form #user_email, #new-message-form #message_body").focus();


  // Cuenta regresiva de caracteres de mensajes, el limite es 140
  $('textarea#message_body').keyup(function() {
    var charLength = $(this).val().length;
    // Displays count
    $('#caracter-counter').html(charLength);
    
    // Alerts when 140 characters is reached
    if($(this).val().length > 140) {
      $('#caracter-counter').addClass('wrong-count');
      $('#caracter-counter').html(140 - charLength);
      $('#message_submit').attr('disabled', true).css('background-color','grey');
    } else {
      $('#caracter-counter').removeClass('wrong-count');
      $('#message_submit').attr('disabled', false).css('background-color','#416CC4');
    }
  });

});
