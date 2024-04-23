const mongoose=require("mongoose")

const DataUser=mongoose.Schema({
    image:{type:String,required: true},
    name:{type:String,required: true},
    price:{type:String,required: true},
    rate:{type:String,required: true}
})

const DataModel=mongoose.model("trip",DataUser)

module.exports=DataModel