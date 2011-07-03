class Message

  include Mongoid::Document
  include Mongoid::Timestamps

  field :user_id, :type => Integer
  field :destination
  field :body
  field :sent, :type => Boolean, :default => false

  validates_presence_of :destination
  validates_presence_of :body
  validates_length_of :body, :maximum => 140

  belongs_to :user

  before_save :send_to_tropo

  private

  def send_to_tropo
    sess = Patron::Session.new
    sess.timeout = 20
    sess.base_url = 'http://api.tropo.com'
    sess.headers['User-Agent'] = 'smsflow/1.0'

    tropo_token = '037ca9435ed55142a45b27c68cea1b608ebd61f00a8ad415281259dd0d9fc56ee102bc957'
    destination = self.destination
    message_body = CGI::escape(self.body)

    resp = sess.get("/1.0/sessions?action=create&token=#{tropo_token}&mobile=#{destination}&message=#{message_body}")

    if resp.status == 200
      self.sent = true
    end
  end
end
