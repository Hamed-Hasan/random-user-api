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


// save user api
router
.route("/saveUser")
.post(usersController.saveUser)

// update user api
router
.route("/updateUser/id:")
.patch(usersController.updateUser)

// update multiple user api
router
.route("/bulKUpdate")
.patch(usersController.updateUser)

// delete user api
router
.route("/deleteUser/:id")
.delete(usersController.deleteUser)

module.exports = router