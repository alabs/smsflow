Smsflow::Application.routes.draw do

  devise_for :users, :path_names => { :sign_in => 'login', :sign_out => 'logout', :sign_up => 'signup' }
  namespace :user do
    root :to => 'messages#index'
  end
  resources :messages
  #mount Api::V1::App.new, :at => '/api/v1'
  root :to => 'pages#index'
end
