//source:thapa technical

/*
const funA = () =>{
setTimeout(function(){ console.log('welcome');
funB();
},3000);}
const funB= () =>
console.log('nilam');
funA();
funB(); */
const perOne = (frind,call) =>
{
    console.log(`${frind}`);
    call();
}
const perTwo = () =>
{
    console.log(`i will call back you`);
}
perOne("nilam",perTwo);
