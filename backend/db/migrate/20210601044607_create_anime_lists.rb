class CreateAnimeLists < ActiveRecord::Migration[6.1]
  def change
    create_table :anime_lists do |t|
      t.references :anime
      t.references :list
      t.timestamps
    end
  end
end
