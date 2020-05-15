var canvas=document.getElementById('bubble');
var ctx=canvas.getContext('2d');
var colorArray=['#DDA0DD','#fd5c63','#32de84','#FFD700','#3E8EDE'];
var color=colorArray[Math.floor(Math.random()* colorArray.length)];

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;



function Circle(x,y,dx,dy,radius){
       this.x=x;
       this.y=y;
       this.dx=dx;
       this.dy=dy;
       this.radius=radius;

       this.draw=function(){
       	ctx.beginPath();
       ctx.arc(this.x,this.y,this.radius, Math.PI * 2,false);
       ctx.stroke();
       ctx.strokeStyle="black";
       ctx.fillStyle=color;
       ctx.fill();  
       }


       this.update=function(){

        this.draw();
       	if (this.x + this.radius > innerWidth|| this.x-this.radius < 0) {
       this.dx= -this.dx;
        }
       if (this.y + this.radius > innerHeight|| this.y- this.radius < 0) {
       this.dy= -this.dy;
       }

      this.x+=this.dx;
      this.y+=this.dy;
        }

}

var circleArray=[];

for (var i = 0; i < 50; i++) {
	var x=Math.random() * innerWidth;
var y=Math.random() * innerHeight;
var dx=3;
var dy=3;
var speed=dy=dx=Math.random()*9;
var radius=20;
circleArray.push( new Circle(x,y,dx,dy,radius));

}

       function animate(){
       requestAnimationFrame(animate);
       ctx.clearRect(0,0,innerWidth,innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
	    circleArray[i].update();
        }


}

 animate();




