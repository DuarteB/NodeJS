'use strict'

var mongoose = require('mongoose')
var book = mongoose.model('book')

//GET ALL
exports.listAllBooks = function(req, res) {
    book.find({}, (err, books) => {
        if(err) {
            res.send(err)
        }
        res.json(books)
    })
}

//GET ID
exports.listBook = function(req, res) {
    book.find({'_id': req.params.bookId}, (err, book) => {
        if(err) {
            res.send(err)
        }
        res.json(book)
    })
}

//POST
exports.addBook = function(req, res) {
    newBook = new book(req.body)
    newBook.save((err, book) => {
        if(err) {
            res.send(err)
        }
        res.json(book)
    })
}

//PUT
exports.updateBook = function(req, res) {
    book.findOneAndUpdate({_id: req.params.bookId}, req.body, {new: true}, (err, book) => {
        if(err) {
            res.send(err)
        }
        res.json(book)
    })
}

//DELETE
exports.removeABook = function(req, res) {
    book.remove({_id: req.params.bookId}, (res, book) => {
        if(err) {
            res.send(book)
        }
        res.json({
            'mensage': 'Book has been deleted'
        })
    })
}
