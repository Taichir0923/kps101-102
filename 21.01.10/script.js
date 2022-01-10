const ctx = document.querySelector('#canvas');
const c = ctx.getContext('2d');

ctx.width = 700;
ctx.height = 500;

var x = ctx.width / 2;
var y = ctx.height / 2;

var velocity = 1;

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

function drawBall(){
    c.beginPath();
    c.arc(x , y , 50 , 0 , Math.PI * 2);
    c.fill();
    // x += 5
}

drawBall();
function moveBall(){
    if(x >= ctx.width - 50 || x <= 50){
        velocity *= -1;
    }
    x += 10 * velocity;
}

// setInterval(drawBall , 1000/60)

function init(){
    requestAnimationFrame(init);
    c.clearRect(0, 0, ctx.width, ctx.height);
    drawBall();
    moveBall()
}

init()

// requestAnimationFrame - FPS - Frames Per Second - Hz
// 60Hz => 
// 144Hz
// 165Hz
// 240Hz

// setInterval