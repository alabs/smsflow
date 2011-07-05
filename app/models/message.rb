class Message

  include Mongoid::Document
  include Mongoid::Timestamps

  field :user_id, :type => Integer
  field :recipients, :type => Array
  field :body
  field :sent, :type => Boolean, :default => false

  validates_presence_of :destination
  validates_presence_of :body
  validates_length_of :body, :maximum => 140

  belongs_to :user

  after_save :send_message

  private

  def send_message
    Resque.enqueue(SmsWorker, self.id)
  end
end
