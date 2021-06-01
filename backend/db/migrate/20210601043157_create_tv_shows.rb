class CreateTvShows < ActiveRecord::Migration[6.1]
  def change
    create_table :tv_shows do |t|
      t.string :name
      t.string :desc
      t.string :image
      t.integer :api_id
      t.timestamps
    end
  end
end
