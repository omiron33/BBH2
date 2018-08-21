Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  root to: 'referrals#index'

  get 'faq' => 'referrals#faq'

  get 'referrals/new' => 'referrals#new'

  devise_for :users, :controllers => { registrations: 'registrations' }
end
