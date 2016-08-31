/**
 * Created by bwang on 8/19/2016.
 */
"use strict";

function testJson() {
    var text = '[' +
        '{ "firstName":"John" , "lastName":"Doe" },' +
        '{ "firstName":"Anna" , "lastName":"Smith" },' +
        '{ "firstName":"Peter" , "lastName":"Jones" } ]';

    var obj = JSON.parse(text);
    for (var i = 0; i< obj.length; i++) {
        console.log("employee:" + obj[i].firstName + "," + obj[i].lastName);
    }
}