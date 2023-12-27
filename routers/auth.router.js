const authController=require('../controllers/auth.controller')
const guardAuth=require('./guard.auth')
const body=require('express').urlencoded({extended:true})
const router=require('express').Router()


router.get('/register',guardAuth.notAuth,authController.getRegisterPage)
router.post('/register',body,authController.postRegisterData)

router.get('/login',guardAuth.notAuth,authController.getLoginPage)
router.post('/login',body,authController.postLoginData)

router.post('/logout',authController.logoutFunctionController)



module.exports=router