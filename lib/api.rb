module Api

  module V1

    class App < Sinatra::Base

      get '/' do
        'Hello World!'
      end

      get '/rate' do
        content_type :json
        23.to_json
      end
    end
  end
end
