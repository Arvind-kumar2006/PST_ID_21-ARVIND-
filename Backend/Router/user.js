const router = require('express').Router()

const {register , login} = require('../Controller/user')

router.post('/register' , register)

router.post('/login' , login)

module.exports = router