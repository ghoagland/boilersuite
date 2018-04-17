const router = require('express').Router();

module.exports = router;

//api routes here
router.get('/test', (req, res, next) => res.sendStatus(200))

//error-handling
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});
