# frozen_string_literal: true

require 'bunny'
require 'json'

module RabbitMQ
  class BaseService
    class << self
      def channel
        $rabbitmq_channel
      end

      def publish(routing_key, message)
        return unless channel

        channel.default_exchange.publish(
          message.to_json,
          routing_key: routing_key,
          persistent: true,
          content_type: 'application/json'
        )
      rescue => e
        Rails.logger.error "Failed to publish message: #{e.message}"
        raise
      end

      def create_queue(name, options = {})
        return unless channel

        channel.queue(name, options)
      rescue => e
        Rails.logger.error "Failed to create queue: #{e.message}"
        raise
      end
    end
  end
end
