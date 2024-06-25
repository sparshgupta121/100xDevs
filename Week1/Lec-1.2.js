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

function sum(a,b,fn){
    sum = a+b
    fn(sum) 
}

function PrintSUm(sum){
    console.log(`The Sum of two numbers is: ${sum}`);
}

function PassivePrintSum(sum){
    console.log(`${sum} is the sum of two numbers`);
}

sum(5,10,PassivePrintSum)


let countdown = 30;

const countdownInterval = setInterval(() => {
    console.log(countdown);
    countdown--;

    if (countdown < 0) {
        clearInterval(countdownInterval);
        console.log("Time's up!");
    }
}, 1000);


// Calculate the time it takes between a setTimeout call and the inner function actually running


const timeoutDuration = 1000; 

const startTime = Date.now();

setTimeout(() => {
    const endTime = Date.now();

    // Calculate the time difference
    const elapsedTime = endTime - startTime;

    console.log(`Expected delay: ${timeoutDuration} ms`);
    console.log(`Actual delay: ${elapsedTime} ms`);
}, timeoutDuration);


// Create a terminal clock (HH:MM:SS)




function padZero(number) {
    return number < 10 ? '0' + number : number;
}

function displayClock() {
    const now = new Date();
    const hours = padZero(now.getHours());
    const minutes = padZero(now.getMinutes());
    const seconds = padZero(now.getSeconds());
    
    // Clear the console and display the time
    console.clear();
    console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(displayClock, 1000);

// Initial call to display the clock immediately
displayClock();
