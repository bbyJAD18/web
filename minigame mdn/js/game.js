const canvas = document.getElementById("myCanvas");
/**
 * @type {CanvasRenderingContext2D}
 */
const ctx = canvas.getContext("2d");

let x = canvas.width / 3;
let y = canvas.height - 30;

let dx = 2;
let dy = -2;

const ballRadius = 15;

const paddleHeight = 15;
const paddleWidth = 65;
let paddleX = (canvas.width - paddleWidth) / 3;

let rightPressed = false;
let leftPressed = false;

let interval = 0;

const brickRowCount = 4;
const brickColumnCount = 6;
const brickWidth = 65;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 20;


let bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

let score = 0;

let lives = 5;

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText(`Score: ${score}`, 8, 20);
    
}

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
  }
  
function drawBricks() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status === 1) {
                let brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
                let brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "brown";
                ctx.fill();
                ctx.closePath(); 
            }  
        } 
    }  
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI *2);
    ctx.fillStyle = "#05F5EA";
    ctx.fill();
    ctx.closePath(); 
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#01F5A6";
    ctx.fill();
    ctx.closePath(); 
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    collisionDetection();
    // chequear si choca

    if (y + dy < ballRadius) {
        dy = -dy;   
    } else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;  
        } else {
            lives--;
            if (!lives) {
            alert("GAME OVER");
            document.location.reload();
        } else {
            x = canvas.width / 2;
            y = canvas.height - 30;
            dx = 2;
            dy = -2;
            paddleX = (canvas.width - paddleWidth) / 2;
        }
        }  
    }

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
        ctx.fillStyle = getRandomColor();  
    }  
    if (y + dy < ballRadius) {
        dy = -dy;
        ctx.fillStyle = getRandomColor();  
    }  
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    } else if (leftPressed && paddleX > 0) {
        paddleX -= 7;   
    }

    x += dx;
    y += dy; 
    requestAnimationFrame(draw);
}

function startGame () {
    draw();
}

document.getElementById("runButton").addEventListener("click", 
    function () {
        startGame();
        this.disabled = true;  
});

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
/*
document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e) {
    const relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
      paddleX = relativeX - paddleWidth / 2;
    }
  }  */

function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;  
    } 
}

function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
      rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      leftPressed = false;
    }
}

function collisionDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            const b = bricks[c][r];
            if (b.status === 1) {
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if (score === brickColumnCount * brickRowCount) {
                        alert("YOU WIN, CONGRATULATIONS!")
                        document.location.reload();
                    }
                } 
            }
        } 
    } 
}

if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;   
}

if (y + dy < canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
}