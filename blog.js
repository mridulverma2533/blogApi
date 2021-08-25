const mongoose= require("mongoose")



const blogschema = new mongoose.Schema({
    title:{
        type:String,
        required: true,

     },
     authorname:{
         type:String,
         
     },
     article:{
        type:String,
        unique:true
     },
     category:{
        type:String,
        
        
     },
    
     

    },
    {timestamps: true})



    


// we will create new collection

 module.exports  =  mongoose.model('blogs',blogschema)