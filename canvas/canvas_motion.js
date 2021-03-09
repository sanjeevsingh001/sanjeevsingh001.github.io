var canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');

c.arc(200,200,50,0,Math.PI*2,false);
c.strokeStyle='red';
c.stroke();


var x = 200;
var y = 200;
var radius = 50;
var dx = 6;
var dy = 6;
function animate(){
    requestAnimationFrame(animate);

    c.clearRect(0,0,innerWidth,innerHeight);
    
    c.beginPath();
    c.arc(x,y,radius,0,Math.PI*2,false);
    c.strokeStyle='red';
    c.stroke();
    if(x + radius > innerWidth || x - radius < 0 ){
        dx = -dx;
    }
    if(y + radius > innerHeight || y - radius <0 ){
        dy = -dy;
    }
    x += dx;
    y += dy;
    
}

animate();