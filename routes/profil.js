const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('profil/Profil')
})

module.exports = router