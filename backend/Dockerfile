FROM ruby:3.2.2

# Install system dependencies
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client

# Set working directory
WORKDIR /app

# Install application dependencies
COPY Gemfile Gemfile.lock ./
RUN bundle install --jobs 4

# Copy application code
COPY . .

# Remove existing credentials and generate new ones
RUN rm -f config/credentials.yml.enc config/master.key && \
    bundle exec rails credentials:edit

# Add a script to be executed every time the container starts
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

# Configure the main process to run when running the image
EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0"]
