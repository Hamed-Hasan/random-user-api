const express = require('express');
const usersController = require('../controllers/users.controller')
const router = express.Router();

// randomUser api
router
.route("/randomUser")
.get(usersController.getARandomUser)


// all user api
router
.route("/allUser")
.get(usersController.getAllUsers)

module.exports = router