class HomeController < ApplicationController
  def index
    render json: {
      message: "Welcome to Sales Management System API",
      version: "1.0",
      endpoints: {
        products: "/api/v1/products",
        orders: "/api/v1/orders"
      }
    }
  end
end
