const express = require('express');
const routes = express.Router();
const {registerUser, loginUser} = require('../controllers/authController');

routes.post('/register', registerUser);
routes.post('/loginUser', loginUser);

module.exports = routes;
