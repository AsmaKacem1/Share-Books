const bookController=require('../controllers/book.controller')
const guardAuth=require('./guard.auth')
const route = require('./auth.router')
const multer=require('multer')

const router=require('express').Router()

router.get('/',guardAuth.isAuth,bookController.getAllBookController)
router.get('/:id',guardAuth.isAuth,bookController.getOneBookDetailsController)


route.get('/addbook',guardAuth.isAuth,bookController.getAddBookController)
route.post('/addbook',multer({
storage:multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'assets/uploads')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+'-'+file.originalname)
    }
})
}).single('image'),
guardAuth.isAuth,bookController.postAddBookController)



module.exports=router