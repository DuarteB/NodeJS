'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var bookSchema = Schema({
    title: {
        type: String
    },
    author: {
        type: String
    }
})

module.exports = mongoose.model('book', bookSchema)