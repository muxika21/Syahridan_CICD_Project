{
  "name": "devops-avengers-cicd-app",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "test": "mocha test/app.test.js"
  },
  "dependencies": {
    "express": "^4.17.1",
    "ejs": "^3.1.9",
    "mysql2": "^2.3.3"
  },
  "devDependencies": {
    "chai": "^4.3.7",
    "chai-http": "^4.3.0",
    "mocha": "^10.2.0"
  },
  "engines": {
    "node": "v20.x"
  },
  "author": "",
  "license": "ISC",
  "type": "module"  // Enable ES Module support if you choose to use ES Modules
}
