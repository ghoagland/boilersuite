const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;
module.exports = app;

//logging
app.use(morgan('dev'))

//parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//api routes
app.use('/api', require('./api'));

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// sends index.html
app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

//now serving on port (default 8080)
app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
