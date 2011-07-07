class User

  include Mongoid::Document
  include Mongoid::Timestamps

  field :credit, :default => '0'

  devise :database_authenticatable, :registerable, :confirmable,
         :recoverable, :rememberable, :trackable, :validatable



  validates_uniqueness_of :email

  has_many :messages
end
