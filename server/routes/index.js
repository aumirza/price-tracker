const express = require('express');
const router = express.Router();
const userRouter = require('./users')
const authRouter = require('./auth')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ message: 'Welcome to Express app' });
});

router.use(authRouter)
router.use('/user', userRouter);

module.exports = router;
