// Handles routes that don't exist at all
const notFound = (req, res, next) => {
  const error = new Error(`Route not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Catches any error passed via next(error), formats it consistently
const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // Handle bad MongoDB ObjectId format (e.g., /api/products/invalid-id)
  if (err.name === 'CastError') {
    statusCode = 404;
    message = 'Resource not found';
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
};

module.exports = { notFound, errorHandler };