class CreateLists < ActiveRecord::Migration[6.1]
  def change
    create_table :lists do |t|
      t.string :name
      t.string :desc
      t.integer :user_id
      t.timestamps
    end
  end
end
