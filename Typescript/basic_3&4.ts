//simple Array
var alphas:string[]; 
alphas = ["1","2","3","4"] 
console.log(alphas[0]); 
console.log(alphas[3]);

//Single statement declaration and initialization
var nums:number[] = [1,2,3,3] 
console.log(nums[0]); 
console.log(nums[1]); 
console.log(nums[2]); 
console.log(nums[3]);

//Array Object
var arr_names:number[] = new Array(4)  

for(var i = 0;i<arr_names.length;i++) { 
   arr_names[i] = i * 2 
   console.log(arr_names[i]) 
}

//Array Constructor accepts comma separated values
var names:string[] = new Array("Milk","Warter","Tea","Coca") 

for(var i = 0;i<names.length;i++) { 
   console.log(names[i]) 
}

//tuples
var mytuple = [10,"Hello"]; //create a  tuple 
console.log(mytuple[0]) 
console.log(mytuple[1])

//Tuple Operations
var mytuple = [10,"Hello","World","typeScript"]; 
console.log("Items before push "+mytuple.length)    // returns the tuple size 

mytuple.push(12)                                    // append value to the tuple 
console.log("Items after push "+mytuple.length) 
console.log("Items before pop "+mytuple.length) 
console.log(mytuple.pop()+" popped from the tuple") // removes and returns the last item
  
console.log("Items after pop "+mytuple.length)

//Updating Tuples
var mytuple = [10,"Hello","World","typeScript"]; //create a  tuple 
console.log("Tuple value at index 0 "+mytuple[0]) 

//update a tuple element 
mytuple[0] = 121     
console.log("Tuple value at index 0 changed to   "+mytuple[0])

//Destructuring a Tuple
var a =[10,"hello"] 
var [b,c] = a 
console.log( b )    
console.log( c )

//Union
var val:string|number 
val = 12 
console.log("numeric value of val "+val) 
val = "This is a string" 
console.log("string value of val "+val)

//Union Type and function parameter
function disp(name:string|string[]) { 
    if(typeof name == "string") { 
       console.log(name) 
    } else { 
       var i; 
       
       for(i = 0;i<name.length;i++) { 
          console.log(name[i])
       } 
    } 
 } 

 disp("mark") 
 console.log("Printing names array....") 
 disp(["Mark","Tom","Mary","John"])

 //Union Type and Arrays
var arr:number[]|string[]; 
var i:number; 
arr = [1,2,4] 
console.log("**numeric array**")  

for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
}  

arr = ["Mumbai","Pune","Delhi"] 
console.log("**string array**")  

for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
} 

//Interface and object
interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
 } 
 
 var customer:IPerson = { 
    firstName:"Tom",
    lastName:"Hanks", 
    sayHi: ():string =>{return "Hi there"} 
 } 
 
 console.log("Customer Object ") 
 console.log(customer.firstName) 
 console.log(customer.lastName) 
 console.log(customer.sayHi())  
 
 var employee:IPerson = { 
    firstName:"Jim",
    lastName:"Blakes", 
    sayHi: ():string =>{return "Hello!!!"} 
 } 
   
 console.log("Employee  Object ") 
 console.log(employee.firstName);
 console.log(employee.lastName);

 //
 interface RunOptions { 
    program:string; 
    commandline:string[]|string|(()=>string); 
 } 
 //Union Type and Interface
 //commandline as string 
 var options:RunOptions = {program:"test1",commandline:"Hello"}; 
 console.log(options.commandline)  
 
 //commandline as a string array 
//  options = {program:"test1",commandline:["Hello","World"]}; 
//  console.log(options.commandline[0]); 
//  console.log(options.commandline[1]);  
 
// commandline as a function expression 
//  options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 
 
//  var fn:any = options.commandline; 
//  console.log(fn());

 //Interfaces and Arrays
//  interface namelist { 
//     [index:number]:string 
//  } 
 
//  var list2:namelist = ["John",1,"Bran"] //Error. 1 is not type string  
//  interface ages { 
//     [index:string]:number 
//  } 
 
//  var agelist:ages; 
//  agelist["John"] = 15   // Ok 
//agelist[2] = "nine"   // Error

 //Simple Interface Inheritance
 interface Person { 
    age:number 
 } 
 
 interface Musician extends Person { 
    instrument:string 
 } 
 
 var drummer = <Musician>{}; 
 drummer.age = 27 
 drummer.instrument = "Drums" 
 console.log("Age:  "+drummer.age);
console.log("Instrument:  "+drummer.instrument)

// Multiple Interface Inheritance
interface IParent1 { 
    v1:number 
 } 
 
 interface IParent2 { 
    v2:number 
 } 
 
 interface Child extends IParent1, IParent2 { } 
 var Iobj:Child = { v1:12, v2:23} 
 console.log("value 1: "+this.v1+" value 2: "+this.v2)

 class Car { 
   //field 
   engine:string; 
   
   //constructor 
   constructor(engine:string) { 
      this.engine = engine 
   }  
   
   //function 
   disp():void { 
      console.log("Function displays Engine is  :   "+this.engine) 
   } 
} 

//create an object 
var obj = new Car("XXSY1")

//access the field 
console.log("Reading attribute value Engine as :  "+obj.engine)  

//access the function
obj.disp()