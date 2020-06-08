#!make
include .env
export $(shell sed 's/=.*//' .env)
RED='\033[0;31m'         #  ${RED}
GREEN='\033[0;32m'       #  ${GREEN}
YELLOW='\033[0;33m'      #  ${GREEN}
BOLD='\033[1;m'          #  ${BOLD}
WARNING='\033[37;1;41m'  #  ${WARNING}
END_COLOR='\033[0m'      #  ${END_COLOR}
SHELL=/bin/bash

.PHONY: rebuild up stop down restart status console help

rebuild-no-cache: stop
	@echo ${BOLD}"\nRebuilding containers...\n" ${END_COLOR}
	docker-compose build --no-cache

up-build-d: stop
	@echo ${BOLD}"\nRebuilding containers...\n" ${END_COLOR}
	docker-compose up --build -d

up-build: stop
	@echo ${BOLD}"\nRebuilding containers...\n" ${END_COLOR}
	docker-compose up --build

up:
	@echo ${BOLD}"\nSpinning up containers...\n" ${END_COLOR}
	docker-compose up -d
	@$(MAKE) --no-print-directory status

stop:
	@echo ${BOLD}"\nHalting containers..." ${END_COLOR}
	@docker-compose stop
	@$(MAKE) --no-print-directory status

down:
	@echo ${BOLD}"\nRemoving containers..." ${END_COLOR}
	@docker-compose down
	@$(MAKE) --no-print-directory status

restart:
	@echo ${BOLD}"\nRestarting containers...\n" ${END_COLOR}
	@docker-compose stop
	@$(MAKE) up

status:
	@echo ${BOLD}"\nContainers statuses\n" ${END_COLOR}
	@docker-compose ps

ps:
	@echo ${BOLD}"\nContainers statuses\n" ${END_COLOR}
	@docker-compose ps

docker-prune:
	@echo ${BOLD}"\nClear\n" ${END_COLOR}
	@docker image prune
	@docker container prune
	@docker rmi -f $$(docker images | grep "none" | awk '/ / { print $$3 }')

console-node:
	@docker-compose exec node bash
console-mysql:
	@docker-compose exec mysql bash

logs:
	@docker-compose logs --tail=100 -f
logs-mysql:
	@docker-compose logs --tail=100 -f mysql
logs-node:
	@docker-compose logs --tail=100 -f node
