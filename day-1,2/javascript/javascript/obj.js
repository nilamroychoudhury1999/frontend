//source:yahoo baba
var a = {
    
    fname:'nilam',//(properties)
    lname:'roychoudhury',
     age:25,
     favMovies : ['dhoom','hum'],
     living:{
        'city':'guwahati',
        
   },
    
    
    salary: function(){
         return 25000;
     },
     fullname: function(){
        return this.fname +  " " + this.lname;
    },


}
console.log(a);
console.log(a.fname);
//document.write(a.favMovies);
//document.write(a.favMovies[0]);
//document.write(a.fullname());
document.write(a.living.city);

