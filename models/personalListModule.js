const mongoose = require('mongoose')

const personalSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const Personals = mongoose.model('Personals', personalSchema);

exports.createMember = (name, email, password) =>{
    var newPersonal = new Personals({
        name: name,
        email: email,
        password: password
    }) 
    return newPersonal
}

exports.getOnePersonal = async (email) => {
    let PersonalList = await Member.findOne({email: email})
    return PersonalList
} 