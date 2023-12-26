const bookController=require('../controllers/book.controller')
const guardAuth=require('./guard.auth')

const router=require('express').Router()

router.get('/',guardAuth.isAuth,bookController.getAllBookController)

router.get('/:id',guardAuth.isAuth,bookController.getOneBookDetailsController)

module.exports=router