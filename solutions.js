"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(input){
    return input === true;
}
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(null));
console.log(isTrue("true"));
console.log(isTrue("Banana"));
console.log(isTrue([1, 2]));


function isFalse(value){
    return value === false;
}
console.log(isFalse(false));
console.log(isFalse(0));
console.log(isFalse(null));
console.log(isFalse("true"));
console.log(isFalse(""));
console.log(isFalse([1, 2]))

// isFalse(false)             // true
// isFalse(true)              // false
// isFalse(0)                 // false
// isFalse(null)              // false
// isFalse("")                // false
// isFalse("Banana")          // false
// isFalse([1, 2])            // false

function not(input1){
    return !input1;
}

console.log(not(false));
console.log(not(0));
console.log(not(""));
console.log(not(null));
console.log(not(NaN));
console.log(not(undefined));
console.log(not(true));
console.log(not("something"));
console.log(not(Infinity));
console.log(not(123));
// not(false)                  // true
// not(0)                      // true
// not("")                     // true
// not(null)                   // true
// not(NaN)                    // true
// not(undefined)              // true
// not(true)                   // false
// not("something")            // false
// not(Infinity)               // false
// not(123)                    // false
function addOne(singleInput){
    if(typeof singleInput == "number") {
    return singleInput + 1;
} else if (typeof singleInput === "string" && !isNaN(Number(singleInput))){
        return Number(singleInput) + 1;
    } else {
return NaN;
}
}
console.log(addOne(0));
console.log(addOne(2));
console.log(addOne(-5));
console.log(addOne(5.789));
console.log(addOne(Infinity));
console.log(addOne("2"));
console.log(addOne("0"));
console.log(addOne("banana"));
console.log(addOne(true));
console.log(addOne(NaN));

function isEven(singleInput1) {
    if (!isNaN(Number(singleInput1))){
        return Number(singleInput1) % 2 === 0;
        }else {
        return false;
    }
}

console.log(isEven(2));
console.log(isEven(-8));
console.log(isEven(0));
console.log(isEven("42"));
console.log(isEven(1));
console.log(isEven("-3"));
console.log(isEven(false));
console.log(isEven("banana"));


function isIdentical(arg1, arg2){
    if (arg1 === arg2) {
        return true;
    }else{
        return false;
    }
}

console.log(isIdentical(3, 3));
console.log(isIdentical(false, false));
console.log(isIdentical("hello", "hello"));
console.log(isIdentical(3, 3.0));
console.log(isIdentical(undefined, undefined));
console.log(isIdentical(2, "2"));
console.log(isIdentical("javascript", "java"));


function isEqual(inpArg1, inpArg2){
    if (inpArg1 == inpArg2){
        return true;
    }else{
        return false;
    }
}

console.log(isEqual(3, "3"));
console.log(isEqual("abc123", "abc123"));
console.log(isEqual(true, 1));
console.log(isEqual(0, false));
console.log(isEqual(4, -5));
console.log(isEqual("java", "javascript"));


function or(orInput1, orInput2){
    return orInput1 || orInput2;
}

console.log(or(true, true));
console.log(or(true, false));
console.log(or(false, true));
console.log(or(false, false));
console.log(or("hello", "world"));


function and(andInput1, andInput2){
    return andInput1 && andInput2;
}

console.log(and(true, true));
console.log(and(true, false));
console.log(and(false, true));
console.log(and(false, false));
console.log(and("hello", "world"));


function concat(conInp1, conInp2){
    if(typeof conInp1 === "string" && typeof  conInp2 === "string") {
        return conInp1 + conInp2;
    }else if (typeof conInp1 === "number" && typeof conInp2 === "number"){
        return conInp1.toString() + conInp2.toString();
    }else{
        return conInp1.toString() + conInp2.toString();
    }
}

console.log(concat("code", "up"));
console.log(concat("connect", 4));
console.log(concat("hello", "world"));
console.log(concat(4, 2));
console.log(concat(true, true));

// concat("code", "up")                // "codeup"
// concat("connect", 4)                // "connect4"
// concat("hello", "world")            // "helloworld"
// concat(4, 2)                        // "42"
// concat(true, true)                  // "truetrue"