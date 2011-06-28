module Api

  module V1

    class App < Sinatra::Base

      get '/' do
        'Hello World!'
      end

      get '/message' do
        content_type :json
        Message.all.to_json
      end

      post '/message' do
        message = Message.new
        message.user_id = 1
        message.body = params[:body]
        
        content_type :json
        if message.save
          { :status => 'saved' }.to_json
        else
          { :status => 'error' }.to_json
        end
      end

      post '/callback' do
        sessions_object = Tropo::Generator.parse(request.env['rack.input'].read)
        msg = sessions_object[:session][:parameters][:msg]
        number_to_dial = sessions_object[:session][:parameters][:to]

        tropo = Tropo::Generator.new do
          message({:to => 'tel:+34' + number_to_dial,
                   :channel => 'TEXT',
                   :network => 'SMS'}) do
                     say :value => "#{msg}"
                   end
        end
        tropo.response
      end
    end
  end
end
