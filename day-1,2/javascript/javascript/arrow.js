/*
//  function expression
var myfun1=function show(){
    console.log("function expression ");
}
//anonymous function
var myfun2=function(){
    console.log("anonymous");
}
//arrow
var myfun3=() =>{
    console.log("arrow");
}
myfun1();
myfun2();
myfun3();
var num =x=>{
    console.log(x);
}
num(2);
*/
//single statement
/*
var show = () => console.log("Hello World");  
show(); 
*/
var show = (a,b,c) => {  
    console.log(a + " " + b + " " + c );  
}  
show(100,200,300); 
var show = (a,b,c=3000) => {  
    console.log(a + " " + b + " " + c );  
}  
show(100,200);

var show = (a,b,c=3000) => {  
    console.log(a + " " + b + " " + c );  
}  
show(100,200,700);





