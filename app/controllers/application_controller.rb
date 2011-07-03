class ApplicationController < ActionController::Base

  protect_from_forgery
 
  # esto empezará a funcionar en la versión 2
  #before_filter :set_locale

  private

  def set_locale
    # Si lang nos viene desde params[]
    if params[:lang]
      I18n.locale = params[:lang]
      session[:lang] = I18n.locale
    else
      # Si el usuario tiene en la sesión la clave lang
      if session[:lang]
        I18n.locale = session[:lang]
      else
        # No nos viene nada dado, lo configuramos
        user_lang = extract_user_lang_from_accept_language_header
        supported_langs = [:es, :en]
        if supported_langs.include?(user_lang)
          I18n.locale = user_lang 
        else
          # Si no hay manera de setear lang, mostramos el idioma por defecto
          I18n.locale = :es
        end
        session[:lang] = I18n.locale
      end
    end
  end
  
  def extract_user_lang_from_accept_language_header
    if request.env['HTTP_ACCEPT_LANGUAGE']
      request.env['HTTP_ACCEPT_LANGUAGE'].scan(/^[a-z]{2}/).first
    end
  end
end
