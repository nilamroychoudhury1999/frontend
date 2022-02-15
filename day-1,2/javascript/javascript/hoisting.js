
//source:akshay saini
//getName();
//console.log(x); (for var undefined ,Cannot access 'x' before initialization for let and const )
//console.log(getName);

//let x=7;
//var x=7; 
//const x=7; 
/*function getName(){
    console.log("Nilam");
}*/
var getName=()=>{
    console.log("Nilam");
}
getName();
//console.log(x);
console.log(getName);
// variable name which is being accessed doesn't exist in memory space then it would be not defined, and if exists in memory space but hasn't been assigned any value till now, then it would be undefined.