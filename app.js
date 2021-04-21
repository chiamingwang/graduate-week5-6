const express = require('express');
const path = require('path');
const account = require('./routes/account');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.send('conntected');
});

app.use('/account', account);

app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
})
module.exports = app;