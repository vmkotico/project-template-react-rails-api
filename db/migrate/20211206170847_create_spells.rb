class CreateSpells < ActiveRecord::Migration[6.1]
  def change
    create_table :spells do |t|
      t.string :name
      t.string :image
      t.string :style 
      t.string :effect
      t.string :range

      t.timestamps
    end
  end
end
