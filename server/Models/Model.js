const mongoose = require('mongoose')

const Cryptoschema = new mongoose.Schema({
    base_unit: {
        type: mongoose.SchemaTypes.String,
        // unique: true
    },
    quote_unit: {
        type: mongoose.SchemaTypes.String,
        // unique: true
    },
    low: {
        type: mongoose.SchemaTypes.String,
        // unique: true
    },
    high: {
        type: mongoose.SchemaTypes.String,
        // unique: true
    },
    last: {
        type: mongoose.SchemaTypes.String,
        // unique: true
    },
    type: {
        type: mongoose.SchemaTypes.String,
        // unique: true
    },
    open: {
        type: mongoose.SchemaTypes.String,
        // unique: true
    },
    volume: {
        type: mongoose.SchemaTypes.String,
        // unique: true
    },
    sell: {
        type: mongoose.SchemaTypes.String,
        // unique: true
    },
    buy: {
        type: mongoose.SchemaTypes.String,
        // unique: true
    },
    at: {
        type: mongoose.SchemaTypes.String,
        // unique: true
    },
    name: {
        type: mongoose.SchemaTypes.String,
        // unique: true
    },
    createdate: {
        type: mongoose.SchemaTypes.Date,
        default: new Date()
    }
})
module.exports = mongoose.model('Users', Cryptoschema)