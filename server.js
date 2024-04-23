const express=require("express")
const {userControler}=require("./routes/user.router")
const {dataControler}=require("./routes/data.router")
const app=express()
const connection=require("./db")
app.use(express.json())
app.use("/signup",userControler)
app.use("/data",dataControler)


app.get('/',(req,res)=>{
    res.send('haii')
})







app.listen(4000,async()=>{

    try{
        await connection
        console.log("conected to DB")
    }
    catch(err){
        console.log(err)
    }

    console.log("Running on 4000")
})