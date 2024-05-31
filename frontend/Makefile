b:
	docker build -t next .
r:
	docker run -d -v .:/workspace -p 3000:3000 next
ri:
	docker run -it -v .:/workspace -p 3000:3000 next
p:
	docker ps -a
l:
	docker logs next
a:
	docker attach next
s:
	docker stop $$(docker ps -q)
prune:
	docker system prune -a
ch:
	sudo chown -R eimamura:eimamura /home/eimamura/react-python-postgres