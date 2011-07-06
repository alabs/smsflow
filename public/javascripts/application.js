function clean_array(arr){
  // remueve elementos vacios y duplicados de un array

  // 1. elementos vacios
  new_arr = []; 
  for (k in arr) {
    if(arr[k]) {
      new_arr.push(arr[k]); 
    } 
  }

  // 2. duplicados
  var i,
    len=new_arr.length,
    out=[],
    obj={};
  for (i=0;i<len;i++) {
    obj[new_arr[i]]=0;
  }
  for (i in obj) {
    out.push(i);
  }
  return out;
}

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

  // contador de recipientes, calculador de coste de envio
  $('#message_recipients').keyup( function(){
    // convertimos las lineas del textarea en un array
    var tel_numbers_raw = $(this).val().split('\n');
    var re = /^\d+$/;

    // limpiamos el array, quitando las lineas vacias y los duplicados
    tel_numbers = clean_array(tel_numbers_raw);
    // el contador de los numeros de telefonos, despues de que se quiten los vacios
    var count = tel_numbers.length ;

    for (var i = 0; i < count; i++){
      // comprobamos que se trate de un numero limpio
      var result = re.test(tel_numbers[i]);
      if(result) {
        // si todos los numeros estan bien, calculamos el envio
        // TODO: pedir por API el coste de los SMS
        var cost = parseFloat(count * 0.05).toFixed(2);
        $('#rate span').html(cost + ' €');
        // habilitamos el envio
        $('#message_submit').attr('disabled', false).css('background-color','#416CC4');
      } else {
        // si el numero es invalido, avisamos al usuario
        $('#rate span').html('Invalido ' + tel_numbers[i]);
        // y deshabilitamos el envio
        $('#message_submit').attr('disabled', true).css('background-color','grey');
        // esto es para que solo sea el primer error el que se muestre
        return false;
      }
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

  // Widget para Uservoice
  var uvOptions = {};
  (function() {
    var uv = document.createElement('script'); uv.type = 'text/javascript'; uv.async = true;
    uv.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'widget.uservoice.com/qiMECk3hVp3UZ7RV7DH5g.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(uv, s);
  })();

  //Placeholder support for html5 non compatible browsers
  // https://gist.github.com/311373/3639414d4c8e31def46c72307d2d85aa97dab6be
  if(!jQuery('<input placeholder="1" />')[0].placeholder){
      jQuery(':input[placeholder]').each(function(){
          var $this = $(this);
          if(!$this.val()){
              $this.val($this.attr('placeholder'));
              $this.addClass('input-placeholder');
          }
      }).live('focus', function(e){
          var $this = $(this);
          if($this.hasClass('input-placeholder')){
              $this.val('');
              $this.removeClass('input-placeholder');
          }
      }).live('blur', function(e){
          var $this = $(this);
          if(!$this.val()){
              $this.addClass('input-placeholder');
              $this.val($this.attr('placeholder'));
          }
      });
  }



});

