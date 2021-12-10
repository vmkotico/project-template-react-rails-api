class CreateNewCharacterForms < ActiveRecord::Migration[6.1]
  def change
    create_table :new_character_forms do |t|

      t.timestamps
    end
  end
end
