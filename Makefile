cleandist:
	rm -rf ./dist

build: cleandist
	webpack

dev: cleandist
	npm start
