const express = require('express')
const router = express.Router()

var name = "Johan"

router.get('/', (req, res) => {
    res.render('profil/PersonalProfil', {name : name})
})

module.exports = router