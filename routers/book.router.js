const bookController=require('../controllers/book.controller')

const router=require('express').Router()

router.get('/',bookController.getAllBookController)

router.get('/:id',bookController.getOneBookDetailsController)

module.exports=router