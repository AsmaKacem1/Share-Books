const authModel=require('../models/auth.model')
const body=require('express').urlencoded({extended:true})


exports.getRegisterPage=(req,res,next)=>{
    res.render('register')
}

exports.postRegisterData=(req,res,next)=>{
    authModel.registerFunctionModel(req.body.name,req.body.email,req.body.password).then((user)=>{
        res.redirect('/login')
    }).catch((msg)=>{
        console.log(msg)
    })
    
}