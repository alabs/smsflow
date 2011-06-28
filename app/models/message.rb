class Message

  include Mongoid::Document
  include Mongoid::Timestamps

  field :user_id, :type => Integer
  field :body
  field :sent, :type => Boolean

  validates_presence_of :body
  validates_length_of :body, :maximum => 140
end
