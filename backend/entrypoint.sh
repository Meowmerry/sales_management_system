#!/bin/bash
set -e

# Create storage directories if they don't exist
mkdir -p /app/storage /app/tmp/storage
chmod -R 777 /app/storage /app/tmp/storage

# Remove a potentially pre-existing server.pid for Rails.
rm -f /app/tmp/pids/server.pid

# Wait for database to be ready
until PGPASSWORD=$POSTGRES_PASSWORD PGSSLMODE=disable psql -h "$POSTGRES_HOST" -U "$POSTGRES_USER" -d "$POSTGRES_DB" -c '\q' 2>/dev/null; do
  echo "Postgres is unavailable - sleeping"
  sleep 1
done

echo "Postgres is up - executing command"

# Run database migrations
bundle exec rails db:migrate

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
