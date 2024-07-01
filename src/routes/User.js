const express = require('express');
const router = express.Router();
const { loginUser, registerUser } = require('../controllers/User');
const validateNewUser = require('../middlewares/validateNewUser');

router.post('/login', loginUser);
router.post('/register', validateNewUser, registerUser);

module.exports = router;