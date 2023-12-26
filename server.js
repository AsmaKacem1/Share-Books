const express= require('express')
const app=express()
const path=require('path')
const flash=require('connect-flash')

const RouterHome=require('./routers/home.router')
const RouterBook=require('./routers/book.router')
const RouterAuth=require('./routers/auth.router')
const session=require('express-session')
const MongoDbStore=require('connect-mongodb-session')(session)


app.use(express.static(path.join(__dirname,'assets')))
app.set('view engine','ejs')
app.set('views','views')
app.use(flash())

var Store=new MongoDbStore({
    uri: 'mongodb://127.0.0.1:27017/library',
    collection: 'sessions'
})

app.use(session({
    secret:'this is my secret key azzzzzzezaeaze',
    store:Store,
    resave:true,
    saveUninitialized:true
}))



app.use('/',RouterHome)
app.use('/books',RouterBook)
app.use('/',RouterAuth)

// app.get('/details',(req,res,next)=>{
//     res.render('details')
// })

app.get('/contact',(req,res,next)=>{
    res.render('contact',{verifUser:req.session.userId})
})

app.get('/about',(req,res,next)=>{
    res.render('about',{verifUser:req.session.userId})
})

// app.get('/books',(req,res,next)=>{
//     res.render('books')
// })

// app.get('/login',(req,res,next)=>{
//     res.render('login')
// })

// app.get('/register',(req,res,next)=>{
//     res.render('register')
// })


app.listen(3000,()=>console.log('server running'))