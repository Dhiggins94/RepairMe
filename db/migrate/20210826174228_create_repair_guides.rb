class CreateRepairGuides < ActiveRecord::Migration[6.1]
  def change
    create_table :repair_guides do |t|
      t.references :user, null: false, foreign_key: true
      t.references :electronic, null: false, foreign_key: true
      t.string :image_url
      t.string :title
      t.text :steps

      t.timestamps
    end
  end
end
