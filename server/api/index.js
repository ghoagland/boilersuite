const router = require('express').Router();

module.exports = router;

// api routes here
router.get('/test', (req, res) => res.sendStatus(200));

// error-handling
router.use((req, res, next) => {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});
