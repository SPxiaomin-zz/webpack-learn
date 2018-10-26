cleandist:
	rm -rf ./dist

build: cleandist
	webpack --config 

dev: cleandist
	npm start
