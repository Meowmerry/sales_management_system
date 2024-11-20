# config/initializers/rabbitmq.rb
#  require 'bunny'

# connection = Bunny.new(
#   hostname: ENV['RABBITMQ_HOST'] || 'localhost',
#   port: ENV['RABBITMQ_PORT'] || 5672,
#   vhost: ENV['RABBITMQ_VHOST'] || '/',
#   username: ENV['RABBITMQ_USER'] || 'guest',
#   password: ENV['RABBITMQ_PASSWORD'] || 'guest'
# )

# # Only connect if RabbitMQ is needed
# begin
#   connection.start
#   $rabbitmq_channel = connection.create_channel
# rescue Bunny::TCPConnectionFailed => e
#   Rails.logger.warn "RabbitMQ connection failed: #{e.message}"
#   $rabbitmq_channel = nil
# end