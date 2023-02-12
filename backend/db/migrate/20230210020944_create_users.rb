class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :firstName
      t.string :lastName
      t.string :mbti
      t.string :country
      t.string :province
      t.string :city
      t.integer :age

      t.timestamps
    end
  end
end
