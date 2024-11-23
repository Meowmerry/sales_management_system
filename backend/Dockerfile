FROM ruby:3.3.0-slim

# Install system dependencies
RUN apt-get update -qq && \
    apt-get install -y build-essential libpq-dev nodejs npm git curl ca-certificates && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /usr/share/doc /usr/share/man

# Update SSL certificates
RUN update-ca-certificates

# Install yarn
RUN npm install -g yarn

# Create app directory
WORKDIR /app

# Install application gems
COPY Gemfile Gemfile.lock ./
RUN bundle config set force_ruby_platform true && \
    bundle install

# Copy application code
COPY . .

# Create storage directories
RUN mkdir -p storage tmp/storage tmp/pids && \
    chmod -R 777 storage tmp/storage tmp/pids

# Precompile assets
RUN SECRET_KEY_BASE=dummy bundle exec rails assets:precompile

# Add a script to be executed every time the container starts
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

# Configure the main process to run when running the image
EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0"]
