var canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');

c.fillStyle = 'red';
c.fillRect(0,0,innerWidth,innerHeight);

function Circle(x,y,radius,dx,dy){
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.dx=dy;
    this.dy=dy;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.strokeStyle='blue';
        c.stroke();
        var c1=Math.round(Math.random()*999999);
        c1 = '#'+c1; 
        c.fillStyle= c1;
        //c.fillStyle='red';
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
        this.draw();
    }
}

var circleArray = [];

for(var i=0;i<20;i++){
    var x = Math.random()*innerWidth;
    var y = Math.random()*innerHeight;
    var radius = 50;
    var dx = [Math.random()-0.5]*10;
    var dy = [Math.random()-0.5]*10;
    circleArray.push(new Circle(x,y,radius,dx,dy));
}
function animate(){
    requestAnimationFrame(animate);
    //c.clearRect(0,0,innerWidth,innerHeight);
    //circle.update();
    for(var i=0; i < circleArray.length;++i){
        circleArray[i].update();
    }
}
animate();