# frozen_string_literal: true

# Define the RabbitMQ module
module RabbitMQ; end

# Load RabbitMQ service files in order
require_relative '../../app/services/rabbitmq/base_service'
require_relative '../../app/services/rabbitmq/sales_publisher'
require_relative '../../app/services/rabbitmq/sales_consumer'

# Ensure RabbitMQ module is available globally
Object.const_set(:RabbitMQ, RabbitMQ) unless Object.const_defined?(:RabbitMQ)
