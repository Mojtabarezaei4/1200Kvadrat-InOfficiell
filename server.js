const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded())

//Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/logos', express.static(__dirname + 'public/logos'))
app.use('/photos', express.static(__dirname + 'public/photos'))

// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.listen(port, () => console.log(`Listening on port ${port}`))
