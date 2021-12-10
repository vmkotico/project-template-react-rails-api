class CreateCreatedCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :created_characters do |t|

      t.timestamps
    end
  end
end
