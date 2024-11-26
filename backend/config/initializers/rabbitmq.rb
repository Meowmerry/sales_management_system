# config/initializers/rabbitmq.rb
# frozen_string_literal: true

require 'bunny'

# Load RabbitMQ services
require_relative '../../app/services/rabbitmq/base_service'
require_relative '../../app/services/rabbitmq/sales_publisher'

# Initialize RabbitMQ connection
$rabbitmq_connection = Bunny.new(
  ENV['RABBITMQ_URL'] || 'amqp://guest:guest@localhost:5672',
  automatically_recover: true,
  connection_timeout: 2
)

begin
  $rabbitmq_connection.start
  $rabbitmq_channel = $rabbitmq_connection.create_channel
  Rails.logger.info "Connected to RabbitMQ successfully"

  # Create queue
  RabbitMQ::SalesPublisher.setup_queue
  Rails.logger.info "Created RabbitMQ queue: #{RabbitMQ::SalesPublisher::QUEUE_NAME}"
rescue Bunny::TCPConnectionFailed => e
  Rails.logger.error "Failed to connect to RabbitMQ: #{e.message}"
  $rabbitmq_channel = nil
end

at_exit do
  if $rabbitmq_connection && $rabbitmq_connection.connected?
    $rabbitmq_connection.close
    Rails.logger.info "Closed RabbitMQ connection"
  end
end