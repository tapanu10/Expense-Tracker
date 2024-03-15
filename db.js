const mongoose=require('mongoose')
const dotenv=require('dotenv');
dotenv.config();
//define 
const mongourl=process.env.MONGO;

//setup
mongoose.connect(mongourl,{})


const db=mongoose.connection;

//event listerners
db.on('connected',()=>{
    console.log('Database connected')
})

db.on('error',(err)=>{
    console.log('Error in connecting',err)
})

db.on('disconnnected',()=>{
    console.log('database disconnected')
})


module.exports=db;