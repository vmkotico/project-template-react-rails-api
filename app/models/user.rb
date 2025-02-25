class User < ApplicationRecord
    has_many :characters
    has_many :created_characters
  
    has_secure_password
  
    validates :username, presence: true, uniqueness: true
end
