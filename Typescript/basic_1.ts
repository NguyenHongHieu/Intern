//Variables in TypeScript
var names:string = "Hieu"; 
var weigh:number = 65;
var height:number = 172;
var BMI = weigh / (height*2) 
console.log("name"+names) 
console.log("weigh: "+weigh) 
console.log("height: "+height) 
console.log("BMI: "+BMI)

//Assertion
"use strict";
var str = '1';
var str2 = str; //str is now of type number 
console.log(typeof (str2));

//Variable Scope

var global_num = 50          //global variable 
class Numbers { 
   num_val = 13;             //class variable 
   static sval = 10;         //static field 
   
   storeNum():void { 
      var local_num = 14;    //local variable 
   } 
} 
console.log("Global num: "+global_num)  
console.log(Numbers.sval)   //static variable  
var object = new Numbers(); 
console.log("Global num: "+object.num_val) 

//operators:

var x:number = 4 
var y = -x; 
console.log("value of x: ",x);   //outputs 4 
console.log("value of y: ",y);   //outputs -4

var msg:string = "hello"+"world" 
console.log(msg)

//Conditional Operator 
var num:number = -2 
var result = num > 0 ?"positive":"non-positive" 
console.log(result)
//type
var num = 12 
console.log(typeof num); 

//Decision Marking and Loops

//while versus do..while
var n:number = 5
while(n > 5) { 
   console.log(" this is while") 
} 
do { 
   console.log(" this is do…while") 
} 
while(n>10)

//break
var i:number = 1 
while(i<=10) { 
   if (i % 5 == 0) {   
      console.log ("The first multiple of 5  between 1 and 10 is : "+i) 
      break     //exit the loop if the first multiple is found 
   } 
   i++ 
}  //outputs 5 and exits the loop

//continue
var num:number = 0
var count:number = 0;

for(num=0;num<=20;num++) {
   if (num % 2==0) {
      continue
   }
   count++
}
console.log (" The count of odd values between 0 and 20 is: "+count)    //outputs 10

//for
for (let i = 0; i < 3; i++) {
    console.log ("Block statement execution no." + i);
  }
 //while
let a: number = 2;

while (a < 4) {
    console.log( "Block statement execution no." + a )
    a++;
}