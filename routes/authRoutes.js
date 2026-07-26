const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { registerUser, loginUser } = require('../controllers/authController');
const validate = require('../middleware/validateMiddleware');

router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
  ],
  validate,
  registerUser
);

router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').notEmpty().withMessage('Password is required')
  ],
  validate,
  loginUser
);

module.exports = router;