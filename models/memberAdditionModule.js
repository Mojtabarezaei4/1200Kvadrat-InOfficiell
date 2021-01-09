const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
    name: String,
    email: String,
    userNumber: Number,
    password: String
});

const Member = mongoose.model('Member', memberSchema);

exports.createMember = (name, email, userNumber, password) =>{
    var newMember = new Member({
        name: name,
        email: email,
        userNumber: userNumber,
        password: password
    }) 
    return newMember
}
exports.getAllMembers = async () => {
    let MembersList = await Member.find({})
    return MembersList
}

exports.getOneMember = async (userNumber) => {
    let MemberList = await Member.findOne({userNumber: userNumber})
    return MemberList
} 