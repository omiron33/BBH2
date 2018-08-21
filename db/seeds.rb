# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

AdminUser.delete_all if Rails.env.development?
Company.delete_all if Rails.env.development?

AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?


Company.create!(name: 'Broadband Hospitality', address: '590 E Western Reserve Road Suite 9C, Youngstown, OH 44514', contact_person: 'Jason Castillo', contact_number: '555-555-5555', contact_email: 'jcastillo@bbh.com')
Company.create!(name: 'Omi Inc', address: '400 Main St, Dallas, TX  76248', contact_person: 'Shane Fisher', contact_number:'515-515-4445', contact_email:' sjfisher33@gmail.com')
Company.create!(name: 'MarketSource', address: '525 Campbell Dr, Anchorage, AK  72838', contact_person: 'Mary Steenberg', contact_number: '214-523-3828', contact_email: 'msteenberg@gmail.com')