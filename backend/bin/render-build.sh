#!/usr/bin/env bash
# exit on error
set -o errexit

# Install dependencies
bundle install

# Cleanup any old assets
rm -rf public/assets

# Run database migrations
bundle exec rake db:migrate

# If needed, you can also seed the database
# bundle exec rake db:seed