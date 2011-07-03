class Message

  include Mongoid::Document
  include Mongoid::Timestamps

  field :user_id, :type => Integer
  field :destination
  field :body
  field :sent, :type => Boolean, :default => false

  validates_presence_of :body
  validates_length_of :body, :maximum => 140

  belongs_to :user
end
