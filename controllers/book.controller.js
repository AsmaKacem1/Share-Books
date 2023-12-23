const homeModel=require('../models/home.model')

exports.getAllBookController=(req,res,next)=>{
    homeModel.getAllBooks().then(books=> {
        res.render('books',{books:books})
    })

}
