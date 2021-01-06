const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('login/Login')
})

router.get('/loggainsompersonal', (req, res) => {
    res.render('login/PersonalLogin')
})

module.exports = router