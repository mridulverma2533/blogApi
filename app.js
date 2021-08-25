const express = require("express")
const app = express();
const port =process.env.PORT || 5000;
const mongoose= require("mongoose")
const auth = require("./auth.js")
const blo = require("./auth.js")
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/dummyapi2",{
    useCreateIndex: true,
    useNewUrlParser:true,
    useFindAndModify:true,
    useUnifiedTopology: true 
    
}).then( ()=>{
    console.log("connection is successful");
}).catch((e)=>{
    console.log("no connection");
})
app.use("/api",auth,blo);








app.listen(port,(req,res)=>{
    console.log(`listining port ${port}`)
})
