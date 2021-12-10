class CreatedCharacter < ApplicationRecord
    has_many :minions 
    belongs_to :user 
    belongs_to :new_character_form
end
