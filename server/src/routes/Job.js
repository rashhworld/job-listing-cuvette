const express = require('express');
const router = express.Router();
const { userDashboard, createJob } = require('../controllers/Job');

const verifyToken = require('../middlewares/verifyToken');
const validateNewJob = require('../middlewares/validateNewJob');

router.get('/dashboard', verifyToken, userDashboard);
router.post('/job/create', verifyToken, validateNewJob, createJob);

module.exports = router;