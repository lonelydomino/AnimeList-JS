class CreateShowLists < ActiveRecord::Migration[6.1]
  def change
    create_table :show_lists do |t|
      t.references :show
      t.references :list
      t.timestamps
    end
  end
end
