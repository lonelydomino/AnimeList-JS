class CreateAnimes < ActiveRecord::Migration[6.1]
  def change
    create_table :animes do |t|
      t.string :name
      t.string :desc
      t.string :image
      t.integer :api_id
      t.integer :ep_count
      t.timestamps
    end
  end
end
