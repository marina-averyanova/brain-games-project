install:
	npm install
startEven:
	npm run babel-node -- src/bin/brain-even.js
startCalc:
		npm run babel-node -- src/bin/brain-calc.js
publish:
	npm publish
lint:
	npm run eslint .
