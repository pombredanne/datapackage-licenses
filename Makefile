test:
	./node_modules/.bin/mocha --reporter spec

update:
	./bin/update

.PHONY: test
.PHONY: update
