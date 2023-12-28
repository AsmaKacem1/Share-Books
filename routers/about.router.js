const aboutController=require('../controllers/about.controller')

const router=require('express').Router()

router.get('/',aboutController.getAboutController)


module.exports=router