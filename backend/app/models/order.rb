# frozen_string_literal: true

require 'ostruct'

class Order < ApplicationRecord
  belongs_to :product

  validates :product, presence: true
  validates :quantity, presence: true, numericality: { greater_than: 0 }

  after_create :publish_created
  after_update :publish_updated
  after_destroy :publish_cancelled

  def total_price
    product.price * quantity
  end

  private

  def publish_created
    RabbitMQ::SalesPublisher.publish_sale_created(
      OpenStruct.new(
        id: id,
        amount: total_price,
        customer: nil
      )
    )
  end

  def publish_updated
    RabbitMQ::SalesPublisher.publish_sale_updated(
      OpenStruct.new(
        id: id,
        amount: total_price,
        customer: nil
      )
    )
  end

  def publish_cancelled
    RabbitMQ::SalesPublisher.publish_sale_cancelled(id)
  end
end
