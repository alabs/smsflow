Smsflow::Application.routes.draw do


  devise_for :users, :path_names => { :sign_in => 'login', :sign_out => 'logout', :sign_up => 'signup' }
  namespace :user do
    root :to => 'messages#index'
  end
  resources :messages
  get 'credit' => 'credit#index', :as => 'credit'
  mount Resque::Server.new, :at => '/queues'
  mount Api::V1::App.new, :at => '/api/v1/services'
  root :to => 'pages#index'
end
