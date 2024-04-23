const mongoose=require("mongoose")
const connection=mongoose.connect("mongodb+srv://varunsnair1997:wAHvTzBQph2bMTJu@cluster0.dnxxgxg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")


module.exports={connection}
