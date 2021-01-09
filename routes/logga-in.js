const express = require('express')
const router = express.Router()

const addMember = require('../models/memberAdditionModule')

const bcrypt = require('bcrypt')

router.get('/', (req, res) => {
    res.render('login/Login')
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
        console.log("Faild!")
    }
    }catch{
        res.status(500).send("Something wrong")
    }
})
router.get('/loggainsompersonal', (req, res) => {
    res.render('login/PersonalLogin')
})

module.exports = router