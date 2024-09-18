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
var directions;
(function (directions) {
    directions["up"] = "\u2191";
    directions["down"] = "\u2193";
    directions["left"] = "\u2190";
    directions["right"] = "\u2192";
})(directions || (directions = {}));
function doSomething(Keypressed) {
}
doSomething(directions.up);
doSomething(directions.down);
console.log(directions.left);
console.log(directions.right);
function generics(input) {
    return input;
}
const strarr = generics(["SparshGuptaCoder", "hello", "What'sUp", "Ki-Haal-Chal"]);
console.log(strarr[2].toUpperCase());
const numarr = generics([1, 2, 520, 3, 5, 74, 7, 85, 2, 0, 584, 8, 52, 0]);
console.log(numarr[5]);
