const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('fritidsgarden/Fritidsgarden')
})

module.exports = router