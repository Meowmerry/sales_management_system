class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  
  rescue_from StandardError, with: :handle_error
  rescue_from ActiveRecord::RecordNotFound, with: :handle_not_found
  
  private
  
  def handle_error(e)
    logger.error "Error: #{e.message}"
    logger.error e.backtrace.join("\n")
    render json: { error: 'Internal Server Error', details: e.message }, status: :internal_server_error
  end
  
  def handle_not_found(e)
    render json: { error: 'Not Found', details: e.message }, status: :not_found
  end
end
