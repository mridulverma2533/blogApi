const router = require("express").Router();
const User = require("./account.js");
const blogs = require("./blog.js")

//register
router.post("/register",async(req,res)=>{
    try{
        const newUser = new User(req.body);
        const user = await newUser.save();
        res.status(200).json(user);
        

    }catch(err){
        res.status(500).send(err)
    }
})
//blogs
router.post("/blog",async(req,res)=>{
    try{
        const blog = new blogs(req.body)
        const Blog = await blog.save();
        res.status(200).json(Blog)

    }catch(err){
        res.status(500).json(err)
    }
})
//login
router.post("/login",async(req,res)=>{
    try{
        const user = await User.findOne({email: req.body.email})
        !user && res.status(400).json("invalid emailid")
        const pass = await User.findOne({password: req.body.password})
        !pass && res.status(400).json("invalid password")
        res.status(200).json(user)
         
        
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router