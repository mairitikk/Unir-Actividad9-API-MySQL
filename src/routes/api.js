const router = require('express').Router();

router.use('/autors', require('./api/autors'));

router.use('/posts', require('./api/posts'));

module.exports = router;