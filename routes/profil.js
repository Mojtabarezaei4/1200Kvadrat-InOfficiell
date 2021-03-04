const express = require('express')
const router = express.Router()

const dbModule = require('../models/dbModule')
const addMember = require('../models/memberAdditionModule')

const bcrypt = require('bcrypt')

var name = ""

router.get('/', (req, res) => {
    if(name == null || name == ""){
        res.redirect('/loggain')

    }
    else{
        res.render('profil/Profil', {name : name})
    }
})

router.post('/', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    console.log(hashedPassword);
    let newMember = addMember.createMember(req.body.name, req.body.email, req.body.userNumber, hashedPassword)
    console.log(newMember);
    await dbModule.store(newMember)
    console.log("Registered!")
    res.render('profil/PersonalProfil', {name : name})
})

module.exports = router