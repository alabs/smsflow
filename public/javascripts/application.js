$(function() {
  
  // Ocultar el span de mensajes flash pasado 10 segundos
  $("#flash-notice span, #flash-alert span").fadeOut(30000);
  
  // Poner el foco en el formulario en la página de login y registro
  $("#login-form #user_email, #signup-form #user_email, #new-message-form #message_body").focus();
});
