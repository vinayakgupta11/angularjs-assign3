const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const path = require('path');

const app = express();
const port = process.env.PORT || 2000;
app.use(express.static(path.join(__dirname, '/src')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.listen(port, () => {
  debug(`listening at port   ${chalk.red(port)}`);
});
