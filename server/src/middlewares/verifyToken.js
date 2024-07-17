const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        if (!token) throw Object.assign(Error("Token not found"), { code: 403 });

        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.user = data.uid;
        next();
    } catch (err) {
        next(err);
    }
}

module.exports = verifyToken;