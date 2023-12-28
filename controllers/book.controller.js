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

exports.getAddBookController=(req,res,next)=>{
    res.render('addbook',{verifUser:req.session.userId,Smessage:req.flash('Sucessmessage')[0],Emessage:req.flash('Errormessage')[0]})
}

exports.postAddBookController=(req,res,next)=>{
    bookModel.postDataBookModel(req.body.title,req.body.description,req.body.author,req.body.price,req.file.filename,req.session.userId).then((msg)=>{
        req.flash('Sucessmessage',msg)
        res.redirect('/addbook')
    }).catch((err)=>{
        req.flash('Errormessage',err)
        res.redirect('/addbook')
    })
}


exports.getMyBooksController=(req,res,next)=>{
    bookModel.getMyBooks(req.session.userId).then((books)=>{
        res.render('mybooks',{mybooks:books,verifUser:req.session.userId})
    })
    
}

exports.deleteMyBookController=(req,res,next)=>{
    let id=req.params.id
    bookModel.deleteMyBook(id).then((verif)=>{
        res.redirect('/mybooks')
    }).catch((err)=>{
        console.log(err)
    })
}

exports.updateBookController=(req,res,next)=>{
    let id=req.params.id
    bookModel.getUpdateBookModel(id).then((book)=>{
        res.render('updatebook',{myBook:book,verifUser:req.session.userId,Smessage:req.flash('Sucessmessage')[0],Emessage:req.flash('Errormessage')[0]})
    })
    
}


exports.postUpdateBookController=(req,res,next)=>{
    if (req.file){
        bookModel.postUpdateBookModel(req.body.bookId,req.body.title,req.body.description,req.body.author,req.body.price,req.file.filename,req.session.userId).then((msg)=>{
            req.flash('Sucessmessage',msg)
            res.redirect(`/mybooks/update/${req.body.bookId}`)
        }).catch((err)=>{
            req.flash('Errormessage',err)
            res.redirect(`/mybooks/update/${req.body.bookId}`)
        })
    }else{
        bookModel.postUpdateBookModel(req.body.bookId,req.body.title,req.body.description,req.body.author,req.body.price,req.body.oldImage,req.session.userId).then((msg)=>{
            req.flash('Sucessmessage',msg)
            res.redirect(`/mybooks/update/${req.body.bookId}`)
        }).catch((err)=>{
            req.flash('Errormessage',err)
            res.redirect(`/mybooks/update/${req.body.bookId}`)
        })
    }
}