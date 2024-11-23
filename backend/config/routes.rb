Rails.application.routes.draw do
  # API routes
  namespace :api do
    namespace :v1 do
      resources :products, defaults: { format: :json }
      resources :orders, defaults: { format: :json }
    end
  end

  # Health check endpoint
  get '/health', to: proc { [200, {}, ['ok']] }
  
  # Root route
  root to: proc { [200, {}, ['Sales Management API']] }
end
