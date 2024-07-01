const validateNewUser = (req, res, next) => {
    const { name, email, mobile, password } = req.body;

    if (!name || !email || !password || !mobile) {
        const err = Object.assign(Error("Please provide all required fields"), { code: 400 });
        return next(err)
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        const err = Object.assign(Error("Please provide a valid email address"), { code: 400 });
        return next(err)
    }

    next();
};

module.exports = validateNewUser;