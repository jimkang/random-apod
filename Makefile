abbreviate-apod-json:
	node tools/abbreviate-apod.js apod.json > abbreviated-apod.json

test:
	node tests/basictests.js

pushall:
	git push origin master && npm publish
