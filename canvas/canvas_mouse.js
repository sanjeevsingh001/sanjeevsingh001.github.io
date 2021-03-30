var canvas = document.querySelector('canvas');

canvas.height=window.innerHeight;
canvas.width=window.innerWidth;

var c =canvas.getContext('2d');

/*
c.fillRect(100,100,100,100);
c.strokeStyle='green';
c.rect(100,300,100,100);
c.stroke();
*/

var mouse = {
    x:undefined,
    y:undefined
}

var maxRadius = 50;
var minRadius = 11;

var colorArray = [
    '#52A5D9',
    '#02733E',
    '#F2B035',
    '#F2C063',
    '#F27D16'

];

window.addEventListener('mousemove', 
    function(event){
   mouse.x = event.x;
   mouse.y =  event.y;     
})

window.addEventListener('resize', function(){
    canvas.height=window.innerHeight;
    canvas.width=window.innerWidth;
})

function Circle(x,y,radius,dx,dy){
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.dx=dy;
    this.dy=dy;
    this.color = colorArray[Math.floor(Math.random()*colorArray.length)];
    

    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.fillStyle = this.color;
        c.fill();

    }
    this.update = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0 ){
            this.dx = -this.dx;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius <0 ){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        //inneractivity
        if(mouse.x-this.x<50 && mouse.x-this.x > -50 && 
            mouse.y-this.y<50 && mouse.y-this.y > -50){
                if(this.radius < maxRadius){
                    this.radius += 20;
                }
        }
         else if(this.radius>minRadius){
             this.radius -= 1;
         }
        this.draw();
    }
}

var circleArray = [];

for(var i=0;i<500;i++){
    var x = Math.random()*innerWidth;
    var y = Math.random()*innerHeight;
    var radius = Math.random()*10+1;
    var dx = [Math.random()-0.5]*10;
    var dy = [Math.random()-0.5]*10;
    circleArray.push(new Circle(x,y,radius,dx,dy));
}
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i=0; i < circleArray.length;++i){
        circleArray[i].update();
    }
}
animate();