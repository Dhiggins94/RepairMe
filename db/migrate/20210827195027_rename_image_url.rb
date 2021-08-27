class RenameImageUrl < ActiveRecord::Migration[6.1]
  def change
    rename_column :electronics, :imageUrl, :image_url
  end
end
