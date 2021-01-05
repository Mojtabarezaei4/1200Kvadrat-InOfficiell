const express = require('express')
const router = express.Router()

router.get('/logga-in', (req, res) => {
    res.render('login/Login')
})

module.exports = router