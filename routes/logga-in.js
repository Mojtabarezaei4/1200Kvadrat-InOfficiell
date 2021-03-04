const express = require('express')
const bcrypt = require('bcrypt')
const addMember = require('../models/memberAdditionModule')

const router = express.Router()

let message = ""

// /login route
router.get('/', (req, res) => {
    res.render('login/Login', {message: message})
})
router.post('/', async (req, res) => {
    try{
        const user = await addMember.getOneMember(req.body.userNumber)
        console.log(user)
    if (user){
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if(validPassword){
            res.render('profil/Profil', {name : user.name})
        }
    }    
    else {
        res.render('login/Login', {message: "Kortsnummer eller lösenordet var fel eller existerar inte."})
    }
    }catch{
        res.status(500).send("Something wrong")
    }
})

// /login as a personal route
router.get('/loggainsompersonal', (req, res) => {
    res.render('login/PersonalLogin', {message: message})
})
router.post('/loggainsompersonal', async (req, res) => {
    try{
        const user = await addMember.getOneMember(req.body.userNumber)
        console.log(user)
    if (user){
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if(validPassword){
            res.render('profil/Profil', {name : user.name})
        }
    }    
    else {
        res.render('login/Login', {message: "Kortsnummer eller lösenordet var fel eller existerar inte."})
    }
    }catch{
        res.status(500).send("Something wrong")
    }
})

module.exports = router