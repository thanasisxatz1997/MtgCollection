const express=require("express")
const cors=require("cors")
const app=express()
const MongoDb=require("mongodb").MongoClient
app.use(cors())

const client= new MongoDb("mongodb+srv://thanasisxatz1997:freeewebb199714@cluster0.odnzivn.mongodb.net/?retryWrites=true&w=majority")


const dataBase=async()=>{
    try {
        await client.connect()
        console.log("Done")
    } catch (error) {
        console.log(error)
    }
}

app.get("/collections",async(req,res)=>{
    const db = client.db("MtgCollection");
    const collections=await db.listCollections().toArray()
    console.log(collections)
    res.send(collections)
})


app.listen(4000,()=>{console.log("Server is running!")})