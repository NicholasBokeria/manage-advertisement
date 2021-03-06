require('./config/config')

const express = require('express')
const { mongoose } = require('./db/mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const { Advertisement } = require('./models/advertisement')

const app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public')))
app.use('/static', express.static(path.join(__dirname, '../public')))

app.post('/advertisement', (req, res) => {
    if (req.body.login == process.env.login && req.body.password == process.env.password) {
        res.send({ redirect: '/static/advertisement.html' });
    }
})

app.get('/static/advertisement.html', (req, res) => {
    res.sendFile('static/advertisement.html')
})

app.post('/advertisement/save', (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const linkName = req.body.linkName
    const link = req.body.link

    Advertisement.deleteMany({}, (res) => {
        console.log(res)
    })

    const adv = new Advertisement({ title, description, linkName, link })
    adv.save()
        .then(adv => console.log(adv))
        .catch(err => console.log(err))
})

app.get('/advertisement', (req, res) => {
    Advertisement.find({}, (err, adv) => res.json(adv))
})

app.listen(process.env.PORT, () => {
    console.log(`Server up on ${process.env.PORT}`)
})