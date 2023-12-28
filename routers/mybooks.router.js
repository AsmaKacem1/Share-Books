const bookController=require('../controllers/book.controller')
const router=require('express').Router()
const guardAuth=require('./guard.auth')
const multer=require('multer')

router.get('/',bookController.getMyBooksController)
router.get('/delete/:id',bookController.deleteMyBookController)
router.get('/update/:id',bookController.updateBookController)
router.post('/update/:id',multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,'assets/uploads')
        },
        filename:function(req,file,cb){
            cb(null,Date.now()+'-'+file.originalname)
        }
    })
    }).single('image'),
    guardAuth.isAuth,bookController.postUpdateBookController)


module.exports=router