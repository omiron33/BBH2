class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :address
      t.string :legal_name
      t.string :taxid
      t.string :contact_person
      t.string :contact_number
      t.string :contact_email
      t.string :website
      t.string :linkedin
      t.string :twitter
      t.string :facebook

      t.timestamps
    end
  end
end
