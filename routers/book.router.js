const bookController=require('../controllers/book.controller')

const router=require('express').Router()

router.get('/books',bookController.getAllBookController)

module.exports=router