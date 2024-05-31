b:
	docker build -t fastapi .
r:
	docker run -d -v .:/workspace -p 8000:8000 fastapi
ri:
	docker run -it -v .:/workspace -p 8000:8000 fastapi
p:
	docker ps -a
l:
	docker logs fastapi
a:
	docker attach fastapi
s:
	docker stop $$(docker ps -q)
