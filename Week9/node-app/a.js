"use strict";
let x = 1;
console.log(x);
function greet(name) {
    console.log(`Hey ${name}`);
}
function sum(a, b) {
    return a + b;
}
greet("sparsh");
greet("kirat");
console.log(sum(1, 2));
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(20));
function runAfter1Sec(fn) {
    setTimeout(fn, 5000);
}
runAfter1Sec(function () {
    console.log("Hi There !!!!");
});
function legalAge(user) {
    if (user.age >= 18) {
        return true;
    }
    return false;
}
const canVote = legalAge({
    firstname: "Sparsh",
    lastname: "Gupta",
    age: 21
});
if (canVote) {
    console.log(`you can vote`);
}
else {
    console.log("can't vote");
}
