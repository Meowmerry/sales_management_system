class CreateProducts < ActiveRecord::Migration[7.0]
    def change
      create_table :products do |t|
        t.string :name
        t.decimal :price, precision: 10, scale: 2
        t.integer :quantity_in_stock
  
        t.timestamps
      end
    end
  end
  