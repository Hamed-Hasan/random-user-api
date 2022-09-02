const express = require('express');
const usersController = require('../controllers/users.controller')
const router = express.Router();

router
.route("/randomUser")
.get(usersController.getARandomUser)

router
.route("/allUser")
.get(usersController.getAllUsers)

module.exports = router