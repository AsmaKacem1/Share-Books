const bookController=require('../controllers/book.controller')

const router=require('express').Router()

router.get('/',bookController.getMyBooksController)


module.exports=router