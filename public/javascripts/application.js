$(function() {
  
  // Ocultar el span de mensajes flash pasado 10 segundos
  $("#flash-notice span, #flash-alert span").fadeOut(30000);
  
  // Poner el foco en el formulario en la página de login y registro
  $("#login-form #user_email, #signup-form #user_email, #message-form #message_body").focus();


  // Cuenta regresiva de caracteres de mensajes, el limite es 140
  $('textarea#message_body').keyup(function() {
    var charLength = $(this).val().length;
    // Displays count
    $('#counter').html(charLength);
    
    // Alerts when 140 characters is reached
    if($(this).val().length > 140) {
      $('#counter').addClass('wrong-count');
      $('#counter').html(140 - charLength);
      $('#message_submit').attr('disabled', true).css('background-color','grey');
    } else {
      $('#counter').removeClass('wrong-count');
      $('#message_submit').attr('disabled', false).css('background-color','#416CC4');
    }
  });

  // slideshow en la home (inicio)
  var buttons = { 
    previous:$('#lofslidecontent45 .lof-previous'),
    next:$('#lofslidecontent45 .lof-next') 
  };

  $obj = $('#lofslidecontent45').lofJSidernews( {
    interval : 4000,
    direction       : 'opacitys',
    easing          : 'easeInOutExpo',
    duration        : 1200,
    auto            : false,
    maxItemDisplay  : 4,
    navPosition     : 'horizontal',
    navigatorHeight : 32,
    navigatorWidth  : 80,
    mainWidth:980,
    buttons         : buttons
  });
  // slideshow en la home (final)

});
