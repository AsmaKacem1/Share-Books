const authController=require('../controllers/auth.controller')
const body=require('express').urlencoded({extended:true})
const router=require('express').Router()


router.get('/register',authController.getRegisterPage)
router.post('/register',body,authController.postRegisterData)

router.get('/login',authController.getLoginPage)
router.post('/login',body,authController.postLoginData)

router.post('/logout',authController.logoutFunctionController)


module.exports=router