# full stack web development boilplate with Javascript and TypeScript

## create a react app
start the project with create-react-app
$npx create-react-app
Wait for the boostrap process is ok, add "proxy":"http://localhost:4000" to the package.json to enable the development environment to request the backend service with no additional code.
Use the react-scripts to serve the react app development and testing.

## add express backend
add express, cors, body-parser, cookie-parser, helmet, compression package
$ npm i express body-parser cookie-parser cors helmet compression

Express is most popular micro web framework in javascript language, official website [expressjs home](https://expressjs.com).
We need cors support to avoid the backend refuse the react app web request, add cors package and enable the cors before any route function in the express app.
Helmet is the express middleware to support the security.                                                                                                                                                                                     
Body-parser and cookie-parse help us to simplify the body and cookie process in the web application.
Compression enable the application to support the compression over http protocol.

## add express hot reload support
with the help of nodemon and cross-env, we can get configuration from the enviornment and automatic reload the application when the source code change.
And currently to support paralle start the backend and client app currently.

$npm i -D nodemon cross-env currently

## typescript and testing support
If you need typescript language, support, add the following package
$npm i -D typescript @types/node @types/react @types/react-dom @types/jest
Add the following package to support test
$npm i -D @testing-library/jest-dom @testing-library/react @testing-library/user-event 

## add npm scripts

First, we need rename the default task start to start-front, and add start-server task: cross-env NODE_ENV=development nodemon server/server.js --watch server/*
And add new task start: currently npm run start-server npm start-front --kill others

this is the scripts look like:
"scripts": {
  "build": "node ./buildScript",
  "start-server": "cross-env NODE_ENV=development nodemon server/server.js --watch server/*",
  "start-front": "react-scripts start",
  "build-front": "react-scripts build",
  "eject": "react-scripts eject",
  "test": "react-scripts test",
  "start": "concurrently \"npm run start-server\" \"npm run start-front\" --kill-others"
}
