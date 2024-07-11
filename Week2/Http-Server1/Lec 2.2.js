//Lec 2.2 From Week 2 of Harkirat's Cohort 

//create a todo app that let user store todos on server 

/* Create a http server in C 
Create a http server in rust using actix-web
create a http server in golang using gorilla framework
spring boot java */

const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
app.use(bodyParser.json());

a
app.post('/Conversations',(req,res)=>{
  
  const rawBody = req.body;

  console.log(rawBody);
  // console.log(req.headers);
  res.send({
    msg:"2 + 2 = 4"
  })


})
app.get("/route-handler", function(req,res){

  //req --> headers,body, query parameters
  //do machine learing models ot task
  //res.send will send the data

  res.send("Learing Express")

  //to send json 
  // req.json({

  //   name:"Sparsh",
  //   age:21

  // })


})

app.get('/', (req, res) => {


  //db call
  console.log("Req reached");

  res.send('<b>Hello World!</b>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.listen(4000, () => {
  console.log(`Example app listening on port ${"4000"}`)
})