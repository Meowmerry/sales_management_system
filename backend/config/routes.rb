Rails.application.routes.draw do
  # API routes
  namespace :api do
    namespace :v1 do
      resources :products
      resources :orders
    end
  end

  # Root route
  root 'home#index'
end
