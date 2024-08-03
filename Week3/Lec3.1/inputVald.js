const express = require('express');
const zod = require('zod');

const schema = zod.object({

    email : zod.string().email(),
    password: zod.string().min(6).max(8)
})

const app = express()

app.use(express.json())

app.get("/login",function(req,res){
    res.send("Heyyyy")
})

app.post("/login",function(req,res){

const response = schema.safeParse(req.body)

if(!response){
    res.json({
        msg:"Something is wrong with your inputs"
    })
}

else{
    res.send("Huuhhuuu Login Successfulyy")
}



})

app.listen(3000)