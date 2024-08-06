const express = require('express');
const router = express.Router();
const { createJob, fetchAllJobs, fetchJobsById } = require('../controllers/Job');

const verifyToken = require('../middlewares/verifyToken');
const validateJob = require('../middlewares/validateJob');

router.post('/job', fetchAllJobs);
router.get('/job/:jobId', fetchJobsById);
router.post('/job/create', verifyToken, validateJob, createJob);

module.exports = router;