//source: akshay saini
/*  let arr = ["Akshay","Aditya"];
let object ={
    name:"Akshay",
    city:"Guwahati",
getIntro: function(){
    console.log("this.name "+ "from" + "this.city")//object.name,object.city
 }
} */
/*
let obj = {
    name:"Akshay",
    city:"Guwahati",
    
getIntro: function(){
    console.log(this.name + "from" + this.city);//object.name,object.city
 }
}
let object2 = {
    name : "Aditya",
}
//never do this
object2.__proto__ = obj;
*/



Function.prototype.mybind = function(){
    console.log("nilam");

}
function fun(){

}//fun.__proto__.mybind
function fun2(){
    
}//fun2.__proto__.mybind




