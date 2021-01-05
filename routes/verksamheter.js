const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('verksamheter/Verksamheter')
})

module.exports = router