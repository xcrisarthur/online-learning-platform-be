const jwt = require("jsonwebtoken");

exports.authenticateToken = (req, res, next) => {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];

	if (!token) {
		console.log("No token provided");
		return res
			.status(401)
			.json({ message: "Access denied, no token provided" });
	}

	jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
		if (err) {
			console.log("Invalid token");
			return res.status(403).json({ message: "Invalid token" });
		}

		req.user = user;
		next();
	});
};

exports.authorizeRoles = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			return res
				.status(403)
				.json({ message: "Forbidden, you do not have the required role" });
		}
		next();
	};
};
