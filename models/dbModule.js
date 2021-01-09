const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Members', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected to the DB!")
});


exports.store = async (element) => {
    await element.save()
    console.log("Successfully saved in database!")
}