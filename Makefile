buildintegrity:
	docker build -t integrity:latest -f Dockerfile .
startintegrity:
	docker run -v /var/run/docker.sock:/var/run/docker.sock -p 4567:4567 --name integrity integrity:latest ruby app.rb -p 4444


