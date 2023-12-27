const bookController=require('../controllers/book.controller')

const router=require('express').Router()

router.get('/',bookController.getMyBooksController)
router.get('/delete/:id',bookController.deleteMyBookController)


module.exports=router