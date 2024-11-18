module Api
  module V1
    class OrdersController < ApplicationController

      # GET /api/v1/orders
      def index
        @orders = Order.all
        render json: @orders
      end

      # GET /api/v1/orders/:id
      def show
        @order = Order.find(params[:id])
        render json: @order
      end

      # POST /api/v1/orders
      def create
        @order = Order.new(order_params)
        if @order.save
          render json: @order, status: :created
        else
          render json: @order.errors, status: :unprocessable_entity
        end
      end

      # PUT /api/v1/orders/:id
      def update
        @order = Order.find(params[:id])
        if @order.update(order_params)
          render json: @order
        else
          render json: @order.errors, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/orders/:id
      def destroy
        @order = Order.find(params[:id])
        @order.destroy
        head :no_content
      end

      private

      def order_params
        params.require(:order).permit(:user_id, :product_id, :quantity, :total_price)
      end
    end
  end
end
