# module Api
#   module V1
#     class ProductsController < ApplicationController
#       # GET /api/v1/products
#       def index
#         products = Product.all
#         render json: { status: 'success', data: products }, status: :ok
#       rescue StandardError => e
#         render json: { status: 'error', message: e.message }, status: :internal_server_error
#       end

#       # GET /api/v1/products/:id
#       def show
#         product = Product.find(params[:id])
#         render json: { status: 'success', data: product }, status: :ok
#       rescue ActiveRecord::RecordNotFound
#         render json: { status: 'error', message: 'Product not found' }, status: :not_found
#       end

#       # POST /api/v1/products
#       def create
#         product = Product.new(product_params)
#         if product.save
#           render json: { status: 'success', data: product }, status: :created
#         else
#           render json: { status: 'error', message: product.errors.full_messages }, status: :unprocessable_entity
#         end
#       end

#       # PATCH/PUT /api/v1/products/:id
#       def update
#         product = Product.find(params[:id])
#         if product.update(product_params)
#           render json: { status: 'success', data: product }, status: :ok
#         else
#           render json: { status: 'error', message: product.errors.full_messages }, status: :unprocessable_entity
#         end
#       rescue ActiveRecord::RecordNotFound
#         render json: { status: 'error', message: 'Product not found' }, status: :not_found
#       end

#       # DELETE /api/v1/products/:id
#       def destroy
#         product = Product.find(params[:id])
#         product.destroy
#         render json: { status: 'success', message: 'Product deleted successfully' }, status: :ok
#       rescue ActiveRecord::RecordNotFound
#         render json: { status: 'error', message: 'Product not found' }, status: :not_found
#       end

#       private

#       def product_params
#         params.require(:product).permit(:name, :price, :quantity_in_stock)
#       end
#     end
#   end
# end

class Api::V1::ProductsController < ApplicationController
  # GET /api/v1/products/:id
  def show
    product = Product.find(params[:id])
    render json: product
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Product not found' }, status: :not_found
  end

  # GET /api/v1/products
  def index
    products = Product.all
    render json: products
  end

  # POST /api/v1/products
  def create
    product = Product.new(product_params)
    if product.save
      render json: product, status: :created
    else
      render json: { errors: product.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/products/:id
  def update
    product = Product.find(params[:id])

    if product.update(product_params)
      render json: product, status: :ok
    else
      render json: { errors: product.errors.full_messages }, status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Product not found' }, status: :not_found
  end

  # DELETE /api/v1/products/:id
  def destroy
    product = Product.find(params[:id])
    product.destroy
    render json: { message: 'Product deleted successfully' }, status: :ok
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Product not found' }, status: :not_found
  end

  private

  def product_params
    params.require(:product).permit(:name, :price, :quantity_in_stock)
  end
end