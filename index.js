require("dotenv").config()
const express=require("express")
const app=express()

app.listen(process.env.port_link,()=>{
    console.log("server is running on port 8080")
})