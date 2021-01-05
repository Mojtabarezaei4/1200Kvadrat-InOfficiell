const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('bokaLokal/Boka-lokal')
})

module.exports = router