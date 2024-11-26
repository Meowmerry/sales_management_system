# frozen_string_literal: true

class Sale < ApplicationRecord
  validates :amount, presence: true, numericality: { greater_than: 0 }
  validates :customer, presence: true
  validates :status, presence: true, inclusion: { in: %w[pending completed cancelled] }

  after_create :publish_created
  after_update :publish_updated
  after_destroy :publish_cancelled

  private

  def publish_created
    RabbitMQ::SalesPublisher.publish_sale_created(self)
  end

  def publish_updated
    RabbitMQ::SalesPublisher.publish_sale_updated(self)
  end

  def publish_cancelled
    RabbitMQ::SalesPublisher.publish_sale_cancelled(id)
  end
end
