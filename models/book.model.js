const mongoose=require('mongoose')

var schemaBook=mongoose.Schema({
    title:String,
    description:String,
    author:String,
    price:Number,
    image:String,
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

    
exports.postDataBookModel=(title,description,author,price,image,userId)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{
            let book=new Book({
                title:title,
                description:description,
                author:author,
                price:price,
                image:image,
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
