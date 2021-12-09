class EquipmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :bonus, :style
end
