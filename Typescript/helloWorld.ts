//print hello world
// let greeting: string = "Hello, world!"
// console.log(greeting)

var Greeting = (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
       console.log("Hello World!!!");
    };
     return Greeting;
 }());
 
 var obj = new Greeting();
 obj.greet()