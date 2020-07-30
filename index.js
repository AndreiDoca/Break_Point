import { clearCanvas } from './canvas.js'
import { drawBall, updateBallPosition } from './ball.js'
import { drawPaddle, updatePaddlePosition } from './paddle.js'
import { drawBricks, collisionDetection } from './bricks.js';
import { drawLives, drawScore } from './score.js'



function draw() {
    clearCanvas();

    drawBall();
    drawPaddle();
    drawBricks();
    drawScore();
    drawLives();

    collisionDetection();
    updateBallPosition();
    updatePaddlePosition();
}

export var interval = setInterval(draw, 10);

export const gameOver = () => {
    // console.log('Game Over');'
    alert('Game over');
    requestAnimationFrame(draw);
}