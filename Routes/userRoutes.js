const express = require('express')
const router = express.Router()
const { createNewUser, findAllUsers, allUsers, deleteUser } = require("../controllers/userGet")
const { loginFindUser } = require('../controllers/login')
const { logout } = require('../controllers/logout')

router
    .route('/')
    .get(allUsers)
router
    .route('/signup')
    .post(createNewUser)

router
    .route('/login')
    .post(loginFindUser)
router
    .route('/logout')
    .post(logout)
router
    .route('/:id')
    .get(findAllUsers)
    .delete(deleteUser)

module.exports = router