build:
	sudo docker compose build

build-no-cache:
	sudo docker compose build --no-cache

up:
	sudo docker compose up

build-prod:
	sudo docker compose -f docker-compose.prod.yml build

build-prod-no-cache:
	sudo docker compose -f docker-compose.prod.yml build --no-cache

up-prod:
	sudo docker compose -f docker-compose.prod.yml up

clean-up:
	sudo docker image prune

deploy:
	sudo docker compose down --remove-orphans && docker system prune --all --force --volumes && docker compose -f docker-compose.yml build --no-cache && docker compose -f docker-compose.yml up -d