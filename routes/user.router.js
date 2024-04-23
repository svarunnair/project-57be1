const {Router}=require("express")
const UserModel = require("../models/user.model")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const userControler=Router()


userControler.get("/",(req,res)=>{
    res.send("done")
})



userControler.post("/",async(req,res)=>{
    const {name,email,password}=req.body
    console.log("Bodyyy",name,email,password)
    bcrypt.hash(password, 4,async function (err, hash) {
         const user= await UserModel({
        name,
        email,
        password : hash
    })   
    try{
user.save()
    res.send(user)
}
catch(err){
    console.log(err)
}   
});    
})

userControler.post('/login',async(req,res)=>{
    const {email,password}=req.body
    const user= await UserModel.findOne({email})
    const hash=user.password
    console.log("userrrr",user)
   bcrypt.compare(password, hash, function(err, result) {
    if(err){
        res.send("something went wrong")
    }
    if(result){
        const token = jwt.sign({ userId:user._id }, 'shhhhh');
        res.send({token})
    }else{
        res.send("errrrrr")
    }
})
})



module.exports={userControler}