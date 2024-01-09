const mongoose=require('mongoose')

var schemaBook=mongoose.Schema({
    title:String,
    description:String,
    author:String,
    price:Number,
    image:String,
    pdfLink: String,
    userId:String

})

var Book=mongoose.model('book',schemaBook)
var url = 'mongodb://127.0.0.1:27017/library';


exports.getAllBooks=()=>{

    return new Promise((resolve,reject)=>{

        mongoose.connect(url).then(()=>{
            return Book.find({})


        }).then(books=>{
            mongoose.disconnect()
            resolve(books)


        }).catch(err=>reject(err))
    })

}

exports.getOneBookDetails=(id)=>{

    return new Promise((resolve,reject)=>{

        mongoose.connect(url).then(()=>{
            return Book.findById(id)


        }).then(books=>{
            mongoose.disconnect()
            resolve(books)


        }).catch(err=>reject(err))
    })

}

exports.getThreeBooks=()=>{

    return new Promise((resolve,reject)=>{

        mongoose.connect(url).then(()=>{
            return Book.find({}).limit(3)


        }).then(books=>{
            mongoose.disconnect()
            resolve(books)


        }).catch(err=>reject(err))
    })


}

    
exports.postDataBookModel=(title,description,author,price,image,pdfLink,userId)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
            let book=new Book({
                title:title,
                description:description,
                author:author,
                price:price,
                image:image,
                pdfLink: pdfLink,
                userId:userId
            })
            return book.save()
        }).then(()=>{
            mongoose.disconnect()
            resolve('added!!')
        }).catch((err)=>{
            mongoose.disconnect()
            console.log("nnnnnnok")
            reject(err)
        })
    })
}   


exports.getMyBooks=(userId)=>{

    return new Promise((resolve,reject)=>{

        mongoose.connect(url).then(()=>{
            return Book.find({userId:userId})


        }).then(books=>{
            mongoose.disconnect()
            resolve(books)


        }).catch(err=>reject(err))
    })

}


exports.deleteMyBook=(id)=>{

    return new Promise((resolve,reject)=>{

        mongoose.connect(url).then(()=>{
            return Book.deleteOne({_id:id})


        }).then(books=>{
            mongoose.disconnect()
            resolve(true)


        }).catch(err=>reject(err))
    })

}

exports.getUpdateBookModel=(id)=>{

    return new Promise((resolve,reject)=>{

        mongoose.connect(url).then(()=>{
            return Book.findById(id)


        }).then(book=>{
            mongoose.disconnect()
            resolve(book)


        }).catch(err=>reject(err))
    })

}


exports.postUpdateBookModel=(id,title,description,author,price,image,pdfLink,userId)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
            return Book.updateOne({_id:id},{title:title,description:description,author:author,price:price,image:image,pdfLink:pdfLink,userId:userId})
        }).then(()=>{
            mongoose.disconnect()
            resolve('updated!!')
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}