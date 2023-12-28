exports.getAboutController=(req,res,next)=>{
    res.render('about',{verifUser:req.session.userId})
}