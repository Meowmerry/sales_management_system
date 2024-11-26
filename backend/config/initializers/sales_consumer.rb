# frozen_string_literal: true

Rails.application.config.after_initialize do
  if defined?(Rails::Server) && !Rails.env.test?
    Thread.new do
      begin
        RabbitMQ::SalesPublisher.setup_queue
        RabbitMQ::SalesConsumer.start
        Rails.logger.info 'Sales consumer started successfully'
      rescue => e
        Rails.logger.error "Failed to start sales consumer: #{e.message}"
      end
    end
  end
end
