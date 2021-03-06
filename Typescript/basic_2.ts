//function
//Optional Parameters
function employee(id:number,name:string,mail_id?:string) { 
    console.log("ID:", id); 
    console.log("Name",name); 
    
    if(mail_id!=undefined)  
    console.log("Email Id",mail_id); 
 }
 employee(123,"Hieu","nguyenhonghieuit@gmail.com");
 employee(111,"Huy",);
 //Rest Parameters
 function addNumbers(...nums:number[]) {  
    var i;   
    var sum:number = 0; 
    
    for(i = 0;i<nums.length;i++) { 
       sum = sum + nums[i]; 
    } 
    console.log("sum of the numbers",sum) 
 } 
 addNumbers(1,2,3) 
 addNumbers(10,10,10,10,10)

 //Default parameters
function calculate_discount(price:number,rate:number = 0.50) { 
    var discount = price * rate; 
    console.log("Discount Amount: ",discount); 
 } 
 calculate_discount(1000) 
 calculate_discount(1000,0.30)

 //Anonymous Function

 var res = function(a:number,b:number) { 
    return a*b;  
 }; 
 console.log(res(12,2))

 //The Function Constructor
var myFunction = new Function("a", "b", "return a * b"); 
var test = myFunction(4, 3); 
console.log(x);