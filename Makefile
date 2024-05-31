# Compose
b:
	docker compose up --build
r:
	docker compose up -d
p:
	docker compose ps -a

# Docker
e:
	docker exec -it fastapi /bin/bash
l:
	docker logs fastapi
a:
	docker attach fastapi
s:
	docker stop $$(docker ps -q)
