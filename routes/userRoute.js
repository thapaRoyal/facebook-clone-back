const { home } = require('../controllers/userController');

const router = require('express').Router();

router.get('/user', home);

module.exports = router;
