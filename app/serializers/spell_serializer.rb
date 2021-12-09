class SpellSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :style, :effect, :range
end
