const mongoose=require("mongoose")

const schemaUser=mongoose.Schema({
    name:{type:String,required: true},
    email:{type:String,required: true},
    password:{type:String,required: true}
})

const UserModel=mongoose.model("model",schemaUser)

module.exports=UserModel
