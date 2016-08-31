/**
 * Created by bwang on 8/16/2016.
 */
"use strict";
//-----------global definitions-------------------


function myMove() {

    //--------private properties
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 5); // execute frame every 5 milliseconds

    // internal class
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

// javascript prototype is class
function testClasses() {
    function Foo() {
    };
    Foo.prototype = {bar: 'baz'};

    var f = new Foo();
    alert(f.bar);

    f.bar1 = "bar1";
    alert(Foo.prototype.bar);


    // class definition 1,every class is Object.prototype
    function Person(first, last, age) // with constructor
    {
        // private
        var aaa = 10;

        // public properties, getters/setters
        this.firstName = first;
        this.lastName = last;
        this.age = age;

        // methods
        this.reportAge = function () {
            return this.age;
        };

        // method
        this.findMax = function () {
            var i;
            if (arguments.length < 1) return undefined;
            var max = arguments[0];
            for (i = 0; i < arguments.length; i++) {
                if (arguments[i] > max) {
                    max = arguments[i];
                }
            }
            return max;
        };
    }

    Person.prototype.sayHello1 = function () {
        return "Hello, my last name is: " + this.lastName;
    };

    Person.prototype.toString = function () {
        return this.firstName + ", " + this.lastName + ", " + this.age + ", n:" + this.nationalityity;
    };

    Person.prototype.nationalityity = "English";

    // adding a method #1
    var person1 = new Person("Bujin", "Wang", 48);

    person1.sayHello = function () {
        return "Hello, my first name is: " + this.firstName;
    };

    // add a new property to person1
    person1.newP = "10";

    var p = {a: "test1", b: "test2"}; // p is also a object
    p.toString = function () {
        return this.a + "," + this.b;
    };
    p.setAB = function setAB(a, b) {
        this.a = a;
        this.b = b;
    };

    p.setAB("10", "11");

    alert("testing: " + person1.sayHello1() + "," + person1.toString() + person1.findMax(10, 201, 30, 123, 500, 44.88));


    myMove();
    document.getElementsByTagName("input")[0].value = "Hello World!";
}

//-------------closure

var add = function () {
    var counter = 0;
    return function () {
        return counter++;
    };
}();

function foo(doBar)
{
    function bar()
    {
        console.log( 'bar' );
    }

    function baz()
    {
        console.log( 'baz' );
    }

    window.baz = baz;
    if ( doBar ) bar();
}

function counterIncrement3Times() {
    add();
    add();
    add();
    console.log(add());
    console.log(foo.bar());
}




