console.log("Hey Sparsh");
var a =1 
console.log(a);
var a=2
console.log(a);

//issue with var can be redeclared can be changed system may get confused

let Firstname = "Sparsh"
let isMarried = false

if(isMarried){
    console.log(`${Firstname} is married`);
}

else{
    console.log(`${Firstname} is not married`);
}

let ans= 0;

for (let index = 1; index <=6; index++) {
    ans=ans+index
    
}

console.log(ans);

let arr1=[1,2,3,4,6,8,7,5,2,5,20,55]

for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    if(element%2==0){
    console.log(element);
    }

}

var IntMin = Number.MIN_SAFE_INTEGER
arr1.forEach(element => {
    if(element>IntMin){
        IntMin=element
    }
       
    
});

console.log(IntMin);

const person = [

    {
 name:"sparsh",
 age:20,
 gender:"male"
},
    {
 name:'Ishav',
 age:21,
 gender:'male'
},
    {
 name:'Nyasha',
 age:21,
 gender:'Female'
},
    {
 name:'Dhananjay',
 age:21,
 gender:'male'
},
    {
 name:'Riya',
 age:21,
 gender:'Female'
},
    {
 name:'Soniya',
 age:21,
 gender:'Female'
}

]

person.forEach(element => {

    if(element.gender=="Female"){
        console.log(element['name']);
    }
    
});


for (let i = 0; i < arr1.length / 2; i++) {
    let temp = arr1[i];
    arr1[i] = arr1[arr1.length - 1 - i];
    arr1[arr1.length - 1 - i] = temp;
}

console.log(arr1);

