install:
	npm install
start:
	npm run babel-node -- src/bin/brain-games.js
startEven:
	npm run babel-node -- src/bin/brain-even.js
publish:
	npm publish
lint:
	npm run eslint
