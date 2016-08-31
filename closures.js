/**
 * Created by bwang on 8/17/2016.
 */
"use strict";
function sum(a) {
    return function (b) {
        return a+b;
    }
}

console.log(sum(1)(2));


function test() {
    for(var i in arguments){
        console.log(arguments[i]);
    }
}
