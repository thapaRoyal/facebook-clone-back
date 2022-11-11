const { register, activateAccount } = require('../controllers/userController');

const router = require('express').Router();

router.post('/register', register);
router.post('/activate', activateAccount);

module.exports = router;
