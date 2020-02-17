var express = require('express');
var router = express.Router();

var authorController = require('../controllers/authorController')
var bookController = require('../controllers/bookController')
var bookinstanceController = require('../controllers/bookinstanceController')
var genreController = require('../controllers/genreController')

/// # BOOK ROUTES # ///
// GET home page
router.get('/home', bookController.index)
// GET form create book
router.get('/book/create', bookController.book_create_get)
// POST form data create book
router.post('/book/create', bookController.book_create_post)
// GET form delete book
router.get('/book/:id/delete', bookController.book_delete_get)
// POST data delete book
router.post('/book/:id/delete', bookController.book_delete_post)
// GET form update book
router.get('/book/:id/update', bookController.book_update_get)
// POST data form update book
router.get('/book/:id/update', bookController.book_create_post)
// GET specific book details
router.get('/book/:id', bookController.book_detail)
// GET list of all books
router.get('/books', bookController.book_list)

/// # AUTHOR ROUTES # ///
// GET form create author
router.get('/author/create', authorController.author_create_get)
// POST form data create author
router.post('/author/create', authorController.author_create_post)
// GET form delete author
router.get('/author/:id/delete', authorController.author_delete_get)
// POST form data delete author
router.post('/author/:id/delete', authorController.author_delete_post)
// GET form update author
router.get('/author/:id/update', authorController.author_update_get)
// POST form data update author
router.post('/author/:id/update', authorController.author_update_post)
// GET specific author details
router.get('/author/:id', authorController.author_detail)
// GET list of authors
// router.get('/authors', authorController.author_list)