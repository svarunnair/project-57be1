const {Router}=require("express")
const DataModel=require("../models/data.model")

const dataControler=Router()


dataControler.post('/',async(req,res)=>{
    const {image,name,price,rate}=req.body
    const data= await DataModel({
        image,
        name,
        price,
        rate
    })
    try{
        await data.save()
        res.send(data)
    }
    catch(err){
        console.log(err)
    }
})

dataControler.get("/",async(req,res)=>{
    const {image,name,price,rate}=req.body
    const data = await DataModel.find({})
    res.send(data)
})


module.exports={dataControler}