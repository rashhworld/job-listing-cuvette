const validateUser = (req, res, next) => {
    try {
        const { name, email, mobile, password } = req.body;

        if (!name || !email || !password || !mobile) {
            throw Object.assign(Error("Please provide all required fields"), { code: 400 });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw Object.assign(Error("Please provide a valid email address"), { code: 400 });
        }

        next();
    } catch (err) {
        next(err);
    }
};

module.exports = validateUser;