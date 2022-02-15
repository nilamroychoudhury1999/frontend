//source:programming with mosh,w3schools

/*Block scope
Function scope
Global scope*/


//block scope
/*//1.let
{
    let x = 5;
  }
  console.log(x);//x is not defined */
  /* 
  
  // 2.var
  {
    var x = 5;
  }
  console.log(x);//var can accessed from outside the block */
/*
// 3.const
  {
  const x = 5;
  }
  console.log(x);//ReferenceError: x is not defined
*/
//Local Scope:Variables declared within a JavaScript function, become LOCAL to the function.



/*  
  
function start(){
    const massage ='hi';
   
}

console.log(massage);//ReferenceError: massage is not defined
*/
/*
function start(){
    const massage ='hi';
    if (true){
        const another ='bye';
    }
    console.log(another); //another is not defined
    
}
start(); */
/*

function start(){
    const massage ='hi';
   
}
function stop(){
    const massage ='bye';
   
}
start(); */
/*
const color='red';
function start(){
    const massage ='hi';
    console.log(color);//red
    
}
function stop(){
    const massage ='bye';
   
}
start(); */
/*
const color='red';
function start(){
    const massage ='hi';
    const color='blue';

    console.log(color);//blue
    
}
function stop(){
    const massage ='bye';
   
}
start();
*/


