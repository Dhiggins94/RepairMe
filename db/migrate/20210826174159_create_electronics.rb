class CreateElectronics < ActiveRecord::Migration[6.1]
  def change
    create_table :electronics do |t|
      t.string :name
      t.text :description
      t.string :imageUrl

      t.timestamps
    end
  end
end
