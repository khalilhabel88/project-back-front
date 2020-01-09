const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")

const app= express();

app.use(express.json({extended:true}))

const db = require('./config/mongoURI').mongoURI
//get router
const document =require('./Routes/document')
const user = require('./Routes/users')
const auth =require('./Routes/auth')
const profile =require('./Routes/profile')

//connect to db
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true })
.then(()=> console.log("mongoDB connected "))
.catch(err=>console.log(err))

//difini le route 
app.use('/listdocument',document)
app.use('/listuser', user)
app.use('/auth',auth)
app.use('/profile',profile)

const port= process.env.PORT||5000
app.listen(port,()=>console.log(`server start in port ${port}`))

