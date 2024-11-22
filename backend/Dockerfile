FROM ruby:3.3.6-slim

# Install essential packages and dependencies
RUN apt-get update -qq && \
    apt-get install -y \
    build-essential \
    libpq-dev \
    nodejs \
    npm \
    git \
    curl \
    postgresql-client \
    ca-certificates

# Set working directory
WORKDIR /app

# Install specific bundler version
RUN gem update --system && \
    gem install bundler

# Copy gemfiles
COPY Gemfile Gemfile.lock ./

# Configure bundler
RUN bundle config set --local deployment 'true' && \
    bundle config set --local without 'development test' && \
    bundle config set force_ruby_platform true && \
    bundle install --jobs 4 --retry 3

# Copy application code
COPY . .

# Precompile assets
RUN SECRET_KEY_BASE=dummy RAILS_ENV=production bundle exec rake assets:precompile

# Add SSL certificates
RUN update-ca-certificates

# Expose port
EXPOSE 3000

# Start the server
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
