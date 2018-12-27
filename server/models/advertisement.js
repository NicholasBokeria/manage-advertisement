const mongoose = require('mongoose')

const AdvertisementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String
    }
})

const Advertisement = mongoose.model('Advertisement', AdvertisementSchema)

module.exports = { Advertisement }