
function main(){
    fetch("http://localhost:3000/")
    .then(async resp=>{
        const json =await resp.json();        
        console.log(json.length);
        
    })
}
async function main2(){
    const resp = await fetch("http://localhost:3000/")
        const json =await resp.json();        
        console.log(json.length);
        
}

async function post(){
    const resp= await fetch("https://www.postb.in/1725712593796-9110233352985",{
        method:"post"
    })

    console.log(await resp.text());
    
}

async function put(){
    const resp= await fetch("https://www.postb.in/1725712593796-9110233352985",{
        method:"put"
    })

    console.log(await resp.text());
    
}

async function deleted(){
    const resp= await fetch("https://www.postb.in/1725712593796-9110233352985",{
        method:"delete"
    })

    console.log(await resp.text());
    
}

main();
main2();
post();
put();
deleted();