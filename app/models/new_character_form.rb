class NewCharacterForm < ApplicationRecord
    has_many :spells 
    has_many :outfits
    has_many :equipments 
    has_many :characters 
    belongs_to :created_character

    
end
