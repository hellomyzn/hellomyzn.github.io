up:
	docker-compose up -d --build
build:
	docker-compose build --no-cache --force-rm
stop:
	docker-compose stop
down:
	docker-compose down
restart:
	@make down
	@make up
destroy:
	docker-compose down --rmi all --volumes --remove-orphans 
destroy-volumes:
	docker-compose down --volumes
ps:
	docker-compose ps
logs:
	docker-compose logs
react:
	docker-compose exec react bash
db:
	docker-compose exec db bash
start:
	@make up
	@make react

