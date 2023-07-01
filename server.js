'use strict'

//express = library we imported for server framework methods and code
const express = require('express');
// dotenv allows us to read from an env file
// const { config } = require('dotenv');
// config();
// const PORT = process.env.PORT;

const server = express();
const pageNotFoundHandler = require('./routeErrorHandlers/404.js');
const errorHandler =  require('./routeErrorHandlers/500.js');
const stamper = require('./middleware/stamper.js')

// error handling functions (error 404)
// const pageNotFoundHandler = (req, res) => {
//   res.status(404).send({
//     error: 404,
//     route: req.path,
//     message: 'This page does not exist',
//   });
// };

// error 500
// const errorHandler = (err, req, res, next) => {
//   res.status(500).send({
//     err: 500,
//     route: req.path,
//     query: req.query,
//     body: req.body,
//     message: `SERVER ERROR: ${error.message}`,
//   });
//   };

//middleware/timestamp
// const stamper = (req, res, next) => {
//   req.timestamp = new Date();
//   next();
// };


//hello
server.get('/hello', stamper, (req, res) => res.send(`hello ${req.timestamp}`));
//goodbye
server.get('/goodbye', (_, res) => res.send('goodbye'));
//an error or bad route
server.get('/bad', (req, res, next) => next({message:'This is a bad route'}));
//callback function that is the second argument to an express route can take a third argument called next
//next passes info to the next process that occurs

//invalid route
//can do this 2 ways: server.get('/*', handle the route)
server.use('*', pageNotFoundHandler);
server.use(errorHandler);


// server.listen(PORT, ()=> console.log('I am alive on port', PORT));
module.exports = server;