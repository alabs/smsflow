class Message

  include Mongoid::Document
  include Mongoid::Timestamps

  field :user_id, :type => Integer
  field :recipients, :type => Array
  field :body
  field :sent, :type => Boolean, :default => false

  validates_presence_of :recipients
  validates_presence_of :body
  validates_length_of :body, :maximum => 140

  belongs_to :user

  after_save :send_message
  
  def recipients=(args)
    if args.is_a?(Array)
      super(args)
    elsif args.is_a?(String)
      super(args.gsub(/\s+/, '').split(','))
    else
      return nil
    end
  end

  def recipients
    self.attributes['recipients'].blank? ? nil : self.attributes['recipients'].join(', ')
  end

  private

  def send_message
    Resque.enqueue(SmsWorker, self.id)
  end
end
