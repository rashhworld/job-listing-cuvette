const Job = require('../models/Job')

const userDashboard = async (req, res, next) => {
    try {
        res.json({ status: "success", user: req.user });
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

module.exports = { userDashboard, createJob }