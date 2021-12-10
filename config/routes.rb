Rails.application.routes.draw do
  
  resources :created_characters
  resources :characters, only:[:index, :show]
  resources :users
  resources :outfits, only:[:index, :show]
  resources :spells, only:[:index, :show]
  resources :minions, only:[:index, :show]
  resources :equipments, only:[:index, :show] 
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
