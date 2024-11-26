module Api
  module V1
    class OrdersController < ApplicationController

      # GET /api/v1/orders
      def index
        @orders = Order.all
        render json: @orders.map { |order| order_response(order) }
      end

      # GET /api/v1/orders/:id
      def show
        @order = Order.find(params[:id])
        render json: order_response(@order)
      end

      # POST /api/v1/orders
      def create
        @order = Order.new(order_params)
        if @order.save
          render json: order_response(@order), status: :created
        else
          render json: { errors: @order.errors.full_messages }, status: :unprocessable_entity
        end
      end

      # PUT /api/v1/orders/:id
      def update
        @order = Order.find(params[:id])
        if @order.update(order_params)
          render json: order_response(@order)
        else
          render json: { errors: @order.errors.full_messages }, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/orders/:id
      def destroy
        @order = Order.find(params[:id])
        if @order.destroy
          head :no_content
        else
          render json: { errors: @order.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def order_params
        params.require(:order).permit(:product_id, :quantity)
      end

      def order_response(order)
        {
          id: order.id,
          product_id: order.product_id,
          product_name: order.product.name,
          quantity: order.quantity,
          total_price: order.total_price,
          created_at: order.created_at,
          updated_at: order.updated_at
        }
      end
    end
  end
end
