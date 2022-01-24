'use strict'
module.exports = function(app) {
    var bookController = require('../controllers/bookController')

    app.route('/book')
        .get(bookController.listAllBooks)
        .post(bookController.addBook)

    app.route('/book/:bookId')
        .get(bookController.listBook)
        .put(bookController.updateBook)
        .delete(bookController.removeABook)
}