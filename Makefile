buildintegrity:
	docker build -t integrity:latest -f Dockerfile .
startintegrity:
	docker run -v /var/run/docker.sock:/var/run/docker.sock -p 4444:4444 --name integrity integrity:latest ruby app.rb -p 4444


