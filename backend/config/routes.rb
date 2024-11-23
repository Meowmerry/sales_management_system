Rails.application.routes.draw do
  # Root path
  root 'home#index'

  # API routes
  namespace :api do
    namespace :v1 do
      resources :products, only: [:index, :show, :create, :update, :destroy]
      resources :orders, only: [:index, :show, :create, :update, :destroy]
    end
  end
end
