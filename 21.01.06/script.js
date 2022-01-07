// Mathematics
// Physics
// Geometer

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

// chess board

const rookBlack = new Image();
rookBlack.src = './images/rookBlack.png';
rookBlack.addEventListener('load' , () => {
    ctx.drawImage(rookBlack , 15 , 15, 70, 70);
    ctx.drawImage(rookBlack , 715 , 15, 70, 70);
})

const knightBlack = new Image();
knightBlack.src = './images/knightBlack.png';
knightBlack.addEventListener('load' , () => {
    ctx.drawImage(knightBlack , 115 , 15, 70, 70);
    ctx.drawImage(knightBlack , 615 , 15, 70, 70);
})

const biShopBlack = new Image();
biShopBlack.src = './images/biShopBlack.png';
biShopBlack.addEventListener('load' , () => {
    ctx.drawImage(biShopBlack , 215 , 15, 70, 70);
    ctx.drawImage(biShopBlack , 515 , 15, 70, 70);
});

const queenBlack = new Image();
queenBlack.src = './images/queenBlack.png';
queenBlack.addEventListener('load' , () => {
    ctx.drawImage(queenBlack , 315 , 15, 70, 70);
})

const kingBlack = new Image();
kingBlack.src = './images/kingBlack.png';
kingBlack.addEventListener('load' , () => {
    ctx.drawImage(kingBlack , 415 , 15, 70, 70);
})

const pawnBlack = new Image();
pawnBlack.src = './images/pawnBlack.png';
pawnBlack.addEventListener('load' , () => {
    ctx.drawImage(pawnBlack , 15 , 115, 70, 70);
    ctx.drawImage(pawnBlack , 115 , 115, 70, 70);
    ctx.drawImage(pawnBlack , 215 , 115, 70, 70);
    ctx.drawImage(pawnBlack , 315 , 115, 70, 70);
    ctx.drawImage(pawnBlack , 415 , 115, 70, 70);
    ctx.drawImage(pawnBlack , 515 , 115, 70, 70);
    ctx.drawImage(pawnBlack , 615 , 115, 70, 70);
    ctx.drawImage(pawnBlack , 715 , 115, 70, 70);
})


ctx.fillStyle = '#d9b68e';
ctx.fillRect(0, 0, 100, 100);





ctx.fillStyle = '#904e2e';
ctx.fillRect(100, 0, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(200, 0, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(300, 0, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(400, 0, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(500, 0, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(600, 0, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(700, 0, 100, 100);

ctx.fillRect(0, 100, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(100, 100, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(200, 100, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(300, 100, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(400, 100, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(500, 100, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(600, 100, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(700, 100, 100, 100);

ctx.fillRect(0, 200, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(100, 200, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(200, 200, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(300, 200, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(400, 200, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(500, 200, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(600, 200, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(700, 200, 100, 100);

ctx.fillRect(0, 300, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(100, 300, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(200, 300, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(300, 300, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(400, 300, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(500, 300, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(600, 300, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(700, 300, 100, 100);

ctx.fillRect(0, 400, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(100, 400, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(200, 400, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(300, 400, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(400, 400, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(500, 400, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(600, 400, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(700, 400, 100, 100);

ctx.fillRect(0, 500, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(100, 500, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(200, 500, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(300, 500, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(400, 500, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(500, 500, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(600, 500, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(700, 500, 100, 100);

ctx.fillRect(0, 600, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(100, 600, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(200, 600, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(300, 600, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(400, 600, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(500, 600, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(600, 600, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(700, 600, 100, 100);

ctx.fillRect(0, 700, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(100, 700, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(200, 700, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(300, 700, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(400, 700, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(500, 700, 100, 100);
ctx.fillStyle = '#904e2e';
ctx.fillRect(600, 700, 100, 100);
ctx.fillStyle = '#d9b68e';
ctx.fillRect(700, 700, 100, 100);

