Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'http://localhost:8080' # Replace with your allowed origin(s)
  
      resource '*', # Allows all resources (you can restrict to specific paths)
        headers: :any, # Allows any headers
        methods: [:get, :post, :put, :patch, :delete, :options, :head], # HTTP methods allowed
        credentials: true # Allows cookies and credentials
    end
  end