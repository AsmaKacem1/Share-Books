const mongoose=require('mongoose')

var schemaBook=mongoose.Schema({
    _id:String,
    title:String,
    description:String,
    author:String,
    price:Number,
    image:String

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