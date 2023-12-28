const contactController=require('../controllers/contact.controller')

const router=require('express').Router()

router.get('/',contactController.getContactController)


module.exports=router