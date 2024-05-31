# Compose
b:
	docker compose build
r:
	docker compose up -d
br:
	docker compose up --build
p:
	docker compose ps -a
# ri:
# docker compose exec api /bin/sh


# Docker
e:
	docker exec -it next /bin/sh
l:
	docker logs -f next
a:
	docker attach fastapi
s:
	docker stop $$(docker ps -q)
prune:
	docker system prune -a
# Ubuntu
# printenv
# echo $PATH
# export MYENV=777
# cd /run/secrets