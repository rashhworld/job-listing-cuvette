const Job = require('../models/Job')

const fetchAllJobs = async (req, res, next) => {
    try {
        const { title, skills } = req.body;
        let query = {};

        if (title) query.jobPosition = { $regex: title, $options: 'i' };
        if (skills && skills.length > 0) query.skillsRequired = { $all: skills };

        const jobs = await Job.find(query);
        res.json({ status: 'success', data: jobs });
    } catch (err) {
        next(err);
    }
}

const createJob = async (req, res, next) => {
    try {
        const userId = req.user;
        const { companyName, companyLogo, jobPosition, monthlySalary, jobDuration, jobType, locationType, jobLocation, jobDescription, aboutCompany, skillsRequired, additionalInfo } = req.body;

        await Job.create({ userId, companyName, companyLogo, jobPosition, monthlySalary, jobDuration, jobType, locationType, jobLocation, jobDescription, aboutCompany, skillsRequired, additionalInfo });

        res.json({ status: "success", msg: "Job created successfully." });
    } catch (err) {
        next(err);
    }
}

module.exports = { fetchAllJobs, createJob }