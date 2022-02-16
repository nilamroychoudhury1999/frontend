//Use the keyword class to create a class
//add a method named constructor()

/*class ClassName {
    constructor() { ... }
  } */

 /* class fullname{//class name "fullname".
      constructor(fname,lname) {
    this.fname = fname;
    this.lname =lname;//class has two initial properties: "fname" and "lname".
      }
  } */
  // class is not an object.
  //It is a template for JavaScript objects.
  //class-->object
  //instance property - name, age ,height
  //instance method - run, jump
  /* class Rectangle{
      //setup
      constructor (){
          console.log("the rectangle is being created");


      }
    
  }
  let myRectangle1 = new Rectangle();
  let myRectangle2 = new Rectangle();
  */
 /*
  class Rectangle{
    //setup
    constructor (){
        console.log("the rectangle is being created");
        this.width =5;
        this.height=3;
        this.color= 'blue';


    }
  
}
let myRectangle1 = new Rectangle();
*/
/*
class Rectangle{
    //setup
    constructor (_width,_height,_color){
        console.log("the rectangle is being created");
        this.width =_width;
        this.height=_height;
        this.color= _color;


    }
  
}
let myRectangle1 = new Rectangle(3,5,'red');
*/
/*
class Rectangle{
    //setup
    constructor (_width,_height,_color){
        console.log("the rectangle is being created");
        this.width =_width;
        this.height=_height;
        this.color= _color;


    }
  
}
let myRectangle1 = new Rectangle(3,5,'red');
let myRectangle2 = new Rectangle(3,5,'black');
*/
/*class Rectangle{
    //setup
    constructor (_width,_height,_color){
        console.log("the rectangle is being created");
        this.width =_width;
        this.height=_height;
        this.color= _color;


    }
  area () {
      return this.width * this.height;
  }
 
  
} 
let myRectangle1 = new Rectangle(3,5,'red');
let myRectangle2 = new Rectangle(3,4,'black');

console.log(myRectangle1.area());
console.log(myRectangle2.area());
*/
/*
class Rectangle{
    //setup
    constructor (_width,_height,_color){
        console.log("the rectangle is being created");
        this.width =_width;
        this.height=_height;
        this.color= _color;


    }
  area () {
      return this.width * this.height;
  }
 print () {

    console.log('$(this.width) x $(this.height)  $(this.color) ')
 }
  
} 
let myRectangle1 = new Rectangle(3,5,'red');
let myRectangle2 = new Rectangle(3,4,'black');

myRectangle1.print(); */
//getters and setters in js classes
/*class Squre{
    constructor (_width){
        this.width=_width;
        this.height=_width;
    }
    get area ()
    {
        return this.width * this.height;
    }
    set area (area)
    {
        this.width = Math.sqrt(area);
        this.height = this.width;



    }
    
}
let squre1 = new Squre(4);
squre1.area=25;
console.log(squre1.area);
*/
/*
class Squre{
    constructor (_width){
        this.width=_width;
        this.height=_width;
    }
    get area ()
    {
        return this.width * this.height;
    }
    set area (area)
    {
        this.width = Math.sqrt(area);
        this.height = this.width;



    }
    
}
let squre1 = new Squre(4);

console.log(squre1.area);
*/
/*
class Squre{
    constructor (_width){
        this.width=_width;
        this.height=_width;
        this.numOfRequestsForArea = 0;
    }
    get area ()
    {
        this.numOfRequestsForArea++;
        return this.width * this.height;
    }
    set area (area)
    {
        this.width = Math.sqrt(area);
        this.height = this.width;
        



    }
    
}
let squre1 = new Squre(4);
squre1.area=25;
console.log(squre1.area);
console.log(squre1.area);
console.log(squre1.area);
console.log(squre1.numOfRequestsForArea);
*/


//***static method
/*
class Squre {
    constructor(_width){
        this.width =_width;
        this.height=_width;
    }
    
    static equals(a,b) {
        return a.width + a.height === b.width + b.height;
    } 
}
let squre1 = new Squre(8);
let squre2 = new Squre(8);
console.log(Squre.equals(squre1,squre2));//true
*/

/*
class Squre {
    constructor(_width){
        this.width =_width;
        this.height=_width;
    }
    
    static equals(a,b) {
        return a.width + a.height === b.width + b.height;
    } 
}
let squre1 = new Squre(8);
let squre2 = new Squre(9);
console.log(Squre.equals(squre1,squre2));//false
*/

/*
class Squre {
    constructor(_width){
        this.width =_width;
        this.height=_width;
    }
    
    static equals(a,b) {
        return a.width + a.height === b.width + b.height;
    } 
    static isValidDimention(width,height){
        return width === height;
    }
}
let squre1 = new Squre(8);
let squre2 = new Squre(9);
console.log(Squre.isValidDimention(6,6));//true
console.log(Squre.isValidDimention(6,7));//false


*/
//parent and clild class
/*
class person {
    constructor(_name,_age){
        this.name=_name;
        this.age=_age;
    }
    describe(){
        console.log($(this.name))
    }
 
}
class programmer extends person {
    constructor(_name,_age,_yearsofexperience){
        super(_name,_age);
        //custom behaviour
        this.yearsofexperience=_yearsofexperience;
    }

}
let person1 = new person ('jeff',45);
let programmer1 = new programmer("Dom",45,44);
const programmers = [
    new Programmer('dom',56,12),
    new Programmers('jef',56,92),


];
function developeSoftware (programmers){
    //develop software
  for ( let programmer of programmers) ;

}
console.log(person1);
console.log(programmer1);

//
*/
//
// creating a class












/*
class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  // creating an object
  const person1 = new Person('nilam');
  const person2 = new Person('roy');
  
  console.log(person1.name); // nilam
  console.log(person2.name); // roy */
  /*
  // constructor function

  class Person {
    constructor(name) {
    this.name = name;
  }

    // defining method
    greet() {
        console.log(`Hello ${this.name}`);
    }
}

let person1 = new Person('nilam');

// accessing property
console.log(person1.name); // nilam

// accessing method
person1.greet(); // Hello nilam*/
/*
// accessing class
const p = new Person(); // Uncaught ReferenceError: Cannot access 'Person' before initialization

// defining class
class Person {
  constructor(name) {
    this.name = name;
  }
} */
/*
class Person {
    constructor() {
      a = 0;
      this.name = a;
    }
  }
  
  let p = new Person()//Uncaught ReferenceError: a is not defined
  */
  class Person {
    constructor(name) {
        this.name = name;
    }

    // getter
    get personName() {
        return this.name;
    }

    // setter
    set personName(x) {
        this.name = x;
    }
}

let person1 = new Person('nilam');
console.log(person1.name); // nilam


// name change
person1.personName = 'roy';
console.log(person1.name); // roy
