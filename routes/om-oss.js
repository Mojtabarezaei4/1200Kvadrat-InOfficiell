const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('omOss/Om-oss')
})

router.get('/regler', (req, res) => {
    res.render('omOss/Rules')
})

module.exports = router