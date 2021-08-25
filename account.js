const mongoose= require("mongoose")



const accountschema = new mongoose.Schema({
    name:{
        type:String,
        required: true,

     },
     phone:{
         type:Number,
         unique:true
     },
     email:{
        type:String,
        unique:true
     },
     password:{
        type:Number,String,
        unique:true,
        length:8
     },
     usertype:{
        type:String
     }

    },
    {timestamps: true})




// we will create new collection

 module.exports  =  mongoose.model('accounts',accountschema)