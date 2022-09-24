const { home } = require('../controllers/user');

const router = require('express').Router();

router.get('/user', home);

module.exports = router;
