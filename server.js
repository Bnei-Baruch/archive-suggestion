const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const decodeAuthorizeUserMiddleware = require('./decodeUser');
const app = express();
const port = 1500;

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', decodeAuthorizeUserMiddleware);

app.listen(port);
console.log('pi server is up and running on port ' + port);

process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown');
  });
