#!/bin/sh

npm run build
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic --no-input

if [ "$DOCKER_COMPOSE" = 1 ]; then
    echo ""
    echo "Running with docker-compose!"
    echo ""
else
    exec "$@"
fi
