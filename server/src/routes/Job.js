const express = require('express');
const router = express.Router();
const { userDashboard, createJob } = require('../controllers/Job');

const verifyToken = require('../middlewares/verifyToken');
const validateJob = require('../middlewares/validateJob');

router.get('/dashboard', verifyToken, userDashboard);
router.post('/job/create', verifyToken, validateJob, createJob);

module.exports = router;