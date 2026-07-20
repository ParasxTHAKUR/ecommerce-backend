const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Checks if a valid JWT token is present
const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Token comes as "Bearer <token>" - split and take the token part
      token = req.headers.authorization.split(' ')[1];

      // Verify the token using our secret
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find the user and attach to request (excluding password)
      req.user = await User.findById(decoded.id).select('-password');

      next(); // move on to the actual route handler
    } catch (error) {
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};

// Checks if the logged-in user is an admin
const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    return res.status(403).json({ message: 'Not authorized as admin' });
  }
};

module.exports = { protect, admin };