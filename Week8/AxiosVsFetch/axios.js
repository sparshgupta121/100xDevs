const axios = require("axios")

async function get(){

   const resp= await axios.get("https://www.postb.in/1725714612422-7907743493560")
   console.log(resp.data);
   
}
async function put(){

   const resp= await axios.put("https://www.postb.in/1725714612422-7907743493560")
   console.log(resp.data);
   
}
async function post(){

   const resp= await axios.post("https://www.postb.in/1725714612422-7907743493560")
   console.log(resp.data);
   
}
async function deleted(){

   const resp= await axios.delete("https://www.postb.in/1725714612422-7907743493560")
   console.log(resp.data);
   
}


get();
put();post();
deleted();


async function postreq(){
    const resp= await axios("https://httpdump.app/dumps/e19d13da-42ed-4bb3-8bf7-e95b73e549bd",
        
        {
            
        
        method:"put",
        data:{
            dfgfdsfghfdsfg:"dsfghgfdsadfgfdfgf"
        },
        headers:{
            authorisation:"berarer 123"
        }
    })
    console.log(resp.data);
    
 }
 

 postreq();
