const express = require('express')
const router = express.Router()

var name = ""

router.get('/', (req, res) => {
    if(name == null || name == ""){
        res.render('login/login')
    }
    else{
        res.render('profil/PersonalProfil', {name : name})
    }
})

module.exports = router