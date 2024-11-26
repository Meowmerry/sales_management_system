# frozen_string_literal: true

module RabbitMQ
  class SalesPublisher < BaseService
    QUEUE_NAME = 'sales_events'

    class << self
      def publish_sale_created(sale)
        publish(QUEUE_NAME, {
          event: 'sale_created',
          sale_id: sale.id,
          amount: sale.amount,
          customer: sale.customer,
          timestamp: Time.current
        })
      end

      def publish_sale_updated(sale)
        publish(QUEUE_NAME, {
          event: 'sale_updated',
          sale_id: sale.id,
          amount: sale.amount,
          customer: sale.customer,
          timestamp: Time.current
        })
      end

      def publish_sale_cancelled(sale_id)
        publish(QUEUE_NAME, {
          event: 'sale_cancelled',
          sale_id: sale_id,
          timestamp: Time.current
        })
      end

      def setup_queue
        create_queue(QUEUE_NAME, durable: true)
      end
    end
  end
end
