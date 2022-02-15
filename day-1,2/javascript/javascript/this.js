//source: programming with mosh
//method -> obj
//function --> global(window,global)
/*
const video = {
    title:'a',
    play() {
        console.log (this);
    }
};

video.play();*/
/*
const video = {
    title:'a',
    play() {
        console.log (this);
    }
};
video.stop = function(){
    console.log(this);
};

video.stop(); */
/*
const video = {
    title:'a',
    play() {
        console.log (this);
    }
};
function playvideo(){
    console.log(this);
};

playvideo();
*/

/*
const video = {
    title:'a',
    play() {
        console.log (this);
    }
};
function Video(title){
    this.title=title;
    console.log(this);
}
const v = new Video('b');
*/
/*
const video = {
    title:'a',
    tags:['a','b','c'],
    showTags() {
      this.tags.forEach(function(tag)
      {
          console.log(tag);
      });
    }
};
video.showTags(); 
*/
/*
const video = {
    title:'a',
    tags:['a','b','c'],
    showTags() {
      this.tags.forEach(function(tag)
      {
          console.log(this.title,tag);
      });
    }
};
video.showTags();//undefind 
*/
/*
const video = {
    title:'a',
    tags:['a','b','c'],
    showTags() {
      this.tags.forEach(function(tag)
      {
          console.log(this,tag);
      });
    }
};
video.showTags(); 
*/
/*
const video = {
    title:'a',
    tags:['a','b','c'],
    showTags() {
      this.tags.forEach(function(tag)
      {
          console.log(this,tag);
      },{firstName:'Nilam'});
    }
};
video.showTags(); */
/*
const video = {
    title:'a',
    tags:['a','b','c'],
    showTags() {
      this.tags.forEach(function(tag)
      {
          console.log(this,tag);
      },this);
    }
};
video.showTags(); 
*/
const video = {
    title:'a',
    tags:['a','b','c'],
    showTags() {
      this.tags.forEach(function(tag)
      {
          console.log(this.title,tag);
      },this);
    }
};
video.showTags(); 