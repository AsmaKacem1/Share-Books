const bookModel=require('../models/book.model')

exports.getAllBookController=(req,res,next)=>{
    bookModel.getAllBooks().then(books=> {
        res.render('books',{
            books:books,
            verifUser:req.session.userId})
    })

}


// exports.getOneBookDetailsController=(req,res,next)=>{
//     let id=req.params.id
//     bookModel.getOneBookDetails(id).then(resbook=> {
//         res.render('details',{book:resbook})
//     })

// }

exports.getOneBookDetailsController=(req,res,next)=>{
    let id=req.params.id
    bookModel.getOneBookDetails(id).then(book=> {
        res.render('details',{
            book:book,
            verifUser:req.session.userId})
    })

}