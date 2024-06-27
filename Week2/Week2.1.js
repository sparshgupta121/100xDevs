function myownFunc(callback,duration){
    setTimeout(callback,duration)
}

myownFunc(function(){
    console.log("After Timeout");
},1000)

function promisifed(duration){
    const p = new Promise(function(resolve){

            setTimeout(resolve,duration)

    });
    return p;
}

const a = promisifed(1000)
console.log(a);
a.then(function(){
    console.log("Timeout is done");
})


function myownpromisifedfunc (){
    return new Promise(function(onDONE,ONERROR){

        ONERROR();
    })
}

const p= myownpromisifedfunc();

p.then(function(){

})
.catch(function(){

})
