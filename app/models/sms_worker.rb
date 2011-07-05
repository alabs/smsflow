class SmsWorker

  @queue = :sms

  def self.perform(message_id)
    message = Message.find(message_id)

    sess = Patron::Session.new
    sess.timeout = 20
    sess.base_url = 'http://api.tropo.com'
    sess.headers['User-Agent'] = 'smsflow/1.0'

    tropo_token = '037ca9435ed55142a45b27c68cea1b608ebd61f00a8ad415281259dd0d9fc56ee102bc957'
    destination = message.destination
    message_body = CGI::escape(message.body)

    resp = sess.get("/1.0/sessions?action=create&token=#{tropo_token}&mobile=#{destination}&message=#{message_body}")

    if resp.status == 200
      message.update_attribute(:sent, true)
    end
  end
end