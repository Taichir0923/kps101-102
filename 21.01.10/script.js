const ctx = document.querySelector('#canvas');
const c = ctx.getContext('2d');

ctx.width = window.innerWidth;
ctx.height = window.innerHeight;

// var x = ctx.width / 2;
// var y = ctx.height / 2;
// var radius = 10;

// var xvelocity = Math.random() < 0.5 ? -0.8 * Math.random() : 0.8 * Math.random();
// var yvelocity = Math.random() < 0.5 ? -0.75 * Math.random() : 0.75 * Math.random();

// 

// var x = 
// 
// c.fillRect(100, 100, 200, 150);
// c.fillStyle = 'red';
// c.fillRect(300, 100, 200, 150);

// arc
// c.fillStyle = 'red';
// c.arc(100, 100, 50, 0, Math.PI , true);
// c.fill();

// c.beginPath();
// c.fillStyle = 'blue';
// c.arc(100, 100, 50, 0, Math.PI);
// c.fill();

// PI = 180deg

// function drawBall(){
//     c.beginPath();
//     c.arc(x , y , radius , 0 , Math.PI * 2);
//     c.fill();
//     // x += 5
// }

// drawBall();
// function moveBall(){
//     if(x >= ctx.width - radius || x <= radius){
//         xvelocity *= -1;
//     }

//     if(y >= ctx.height - radius || y <= radius){
//         yvelocity *= -1;
//     }
//     x += 10 * xvelocity;
//     y += 10 * yvelocity;
// }

// // setInterval(drawBall , 1000/60)

// function init(){
//     requestAnimationFrame(init);
//     c.clearRect(0, 0, ctx.width, ctx.height);
//     drawBall();
//     moveBall()
// }

// init()

// requestAnimationFrame - FPS - Frames Per Second - Hz
// 60Hz => 
// 144Hz
// 165Hz
// 240Hz

class Ball {
    constructor(xPosition , yPosition , xv , yv , radius , red , green , blue){
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.xv = xv;
        this.yv = yv;
        this.radius = radius;
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    drawBall(){
        c.beginPath();
        c.fillStyle = `rgb(${this.red}, ${this.green}, ${this.blue})`;
        c.arc(this.xPosition , this.yPosition , this.radius , 0 , Math.PI * 2 , true);
        c.fill();
    }

    moveBall(){
        if(this.xPosition >= ctx.width - this.radius || this.xPosition <= this.radius){
            this.xv = -this.xv
        }

        if(this.yPosition >= ctx.height - this.radius || this.yPosition <= this.radius){
            this.yv = -this.yv
        }

        this.xPosition += this.xv;
        this.yPosition += this.yv;

        this.drawBall();
    }
}

// setInterval

let balls = [];

for(let i = 0; i < 100; i++){
    let radius = 30;
    let x = Math.random() * (ctx.width - radius * 2) + radius;
    let y = Math.random() * (ctx.height - radius * 2) + radius;
    let xv = (Math.random() - .5) * 10;
    let yv = (Math.random() - .5) * 10;
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let ball = new Ball(x , y , xv , yv , radius , red , green , blue);
    balls.push(ball);
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, ctx.width, ctx.height);
    for(let i = 0; i < balls.length; i++){
        balls[i].moveBall();
    }
}

animate()