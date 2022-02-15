//source:code with harry
/*
//variables name  start with letter,undercore(_),dollar($)
//cannot num,after 1st letter we use num ex: name1
//variables are case sensitive (a and A are different variables)
var age=22;//number
var name="nilam";//string
var developer = true; //bollen
var task; //undefined

let age=22;//number
let name="nilam";//string
let developer = true; //bollen
let task; //undefined
let age=25;
console.log(age); //Uncaught SyntaxError: Identifier 'age' has already been declared

const  age =20; // 
const job='developer'; //
const name; //SyntaxError: Missing initializer in const declaration
const num =10; 
num =20;//Assignment to constant variable.
 */
var city = 'guwahati';
console.log(city);

const name ='nilam';
//name = 'roy'; (error:Assignment to constant variable.)

console.log(name);

{
    let city= 'kolkata';//block
    city= 'kolkata';//global
    console.log(city);


}
console.log(city);

const arr1= [12,23,12,53,3]
 //arr1= [12,23,12,53](Assignment to constant variable.)
arr1.push(45);
console.log(arr1);
//use const if possible












