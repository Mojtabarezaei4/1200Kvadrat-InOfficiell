if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const port = 3000

const indexRouter = require('./routes/index')
const fritidsgardenRouter = require('./routes/fritidsgarden')
const verksamheterRouter = require('./routes/verksamheter')
const omOssRouter = require('./routes/om-oss')
const bokaLokalRouter = require('./routes/boka-lokal')
const profilRouter = require('./routes/profil')
const loggaInRouter = require('./routes/logga-in')

// Database connection
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Moongose'))

app.use(express.json())
app.use(express.urlencoded())

//Static Files
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/logos', express.static(__dirname + 'public/logos'))
app.use('/photos', express.static(__dirname + 'public/photos'))
app.use(express.static('public'))

// Routes
app.use('/', indexRouter)
app.use('/fritidsgarden', fritidsgardenRouter)
app.use('/verksamheter', verksamheterRouter)
app.use('/omoss', omOssRouter)
app.use('/bokalokal', bokaLokalRouter)
app.use('/profil', profilRouter)
app.use('/loggain', loggaInRouter)



app.listen(port, () => console.log(`Listening on port ${port}`))
