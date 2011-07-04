class ResqueAuth
  def initialize(app)
    @app = app
  end

  def call(env)
    env['warden'].authenticate!(:database_authenticatable, :rememberable)
    @app.call(env)
  end
end

require 'resque/server'
Resque::Server.use ResqueAuth
