const homeModel=require('../models/home.model')

exports.threeBookController=(req,res,next)=>{
    homeModel.getThreeBooks().then(books=> {
        res.render('index',{books:books})
    })

}