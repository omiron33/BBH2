class Company < ApplicationRecord
    has_many :users
    validates :name, :address, :contact_person, :contact_number, :contact_email, presence: true
end
