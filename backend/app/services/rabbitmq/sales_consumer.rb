# frozen_string_literal: true

module RabbitMQ
  class SalesConsumer < BaseService
    class << self
      def start
        return unless channel

        queue = channel.queue(SalesPublisher::QUEUE_NAME, durable: true)
        
        queue.subscribe(manual_ack: true) do |delivery_info, _properties, payload|
          begin
            process_message(JSON.parse(payload))
            channel.ack(delivery_info.delivery_tag)
          rescue => e
            Rails.logger.error "Error processing message: #{e.message}"
            channel.reject(delivery_info.delivery_tag, true) # Requeue the message
          end
        end
      end

      private

      def process_message(data)
        case data['event']
        when 'sale_created'
          process_sale_created(data)
        when 'sale_updated'
          process_sale_updated(data)
        when 'sale_cancelled'
          process_sale_cancelled(data)
        else
          Rails.logger.warn "Unknown event type: #{data['event']}"
        end
      end

      def process_sale_created(data)
        Rails.logger.info "Processing new sale: #{data['sale_id']}"
        # Add your business logic here
        # For example:
        # - Update inventory
        # - Send confirmation emails
        # - Generate reports
      end

      def process_sale_updated(data)
        Rails.logger.info "Processing updated sale: #{data['sale_id']}"
        # Add your business logic here
      end

      def process_sale_cancelled(data)
        Rails.logger.info "Processing cancelled sale: #{data['sale_id']}"
        # Add your business logic here
      end
    end
  end
end
