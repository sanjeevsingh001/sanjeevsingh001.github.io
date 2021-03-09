var canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var context = canvas.getContext('2d');

var c1=Math.round(Math.random()*999999);
c1 = '#'+c1; 
context.fillStyle= c1;
context.fillRect(100,100,100,100);
c1=Math.round(Math.random()*999999);
c1 = '#'+c1; 
context.fillStyle= c1;
context.fillRect(400,100,100,100);
c1=Math.round(Math.random()*999999);
c1 = '#'+c1; 
context.fillStyle= c1;
context.fillRect(300,400,100,100);


context.beginPath()
context.moveTo(100,300);
for(var i=0;i<5;i++){
    var x = Math.random()*window.innerWidth;
    var y = Math.random()*window.innerHeight;
    context.lineTo(x,y);
    context.stroke();
}



for(var i=0;i<5;i++){
    context.beginPath();
    var x = Math.random()*window.innerWidth;
    var y = Math.random()*window.innerHeight;
    c1=Math.round(Math.random()*999999);
    c1 = '#'+c1; 
    context.arc(x,y,50,0,Math.PI*2,true);
    context.strokeStyle=c1;
    context.stroke();
}
