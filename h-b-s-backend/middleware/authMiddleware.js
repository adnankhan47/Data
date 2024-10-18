const jwt = require("jsonwebtoken");

// Middleware to check for JWT token
const authMiddleware = (req, res, next) => {
  // Get token from the Authorization header
  const token = req.headers["authorization"]?.split(" ")[1]; // Extract token from Bearer scheme

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user information to the request object
    next(); // Call the next middleware or route handler
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};

module.exports = authMiddleware;
