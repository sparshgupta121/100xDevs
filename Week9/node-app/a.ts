let x: number = 1;
console.log(x);

function greet(name:string):void{
    console.log(`Hey ${name}`);
    
}

function sum(a:number,b:number):number{

    return a +b ;
}

greet("sparsh")
greet("kirat")
console.log(sum(1,2));
 
function isLegal(age:number):boolean{

    if(age>=18){
        return true;
    }
    else{
        return false;
    }

}

console.log(
    isLegal(20));

function runAfter1Sec(fn:()=>void){

    setTimeout(fn,5000)

}

runAfter1Sec(function(){
    console.log("Hi There !!!!");
    
})

function legalAge(user:User):boolean{

    if(user.age>=18){
        return true
    }
    return false

}

interface User{
    firstname:string,
    lastname:string,
    age:number
    email?:string
}

const canVote:boolean = legalAge({
    firstname:"Sparsh",
    lastname:"Gupta",
    age:21

})

if(canVote){
    console.log(`you can vote`);
}

else{
    console.log("can't vote");
    
}
