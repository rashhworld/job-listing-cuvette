const express = require('express');
const router = express.Router();
const { fetchAllJobs, createJob } = require('../controllers/Job');

const verifyToken = require('../middlewares/verifyToken');
const validateJob = require('../middlewares/validateJob');

router.post('/job', fetchAllJobs);
router.post('/job/create', verifyToken, validateJob, createJob);

module.exports = router;