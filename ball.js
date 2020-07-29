
import { canvas, ctx } from './canvas.js'
import { paddleWidth, paddleX } from './paddle.js'

const ballRadius = 10;
export var x = canvas.width / 2;
export var y = canvas.height - 30;
export var dx = 2;
export var dy = -2;
export var lives = 3;

export const drawBall = () => {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

export const updateBallPosition = () => {
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy < ballRadius) {
        dy = -dy;
    }
    else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            lives--;
            if (!lives) {
                alert('Game Over');
                document.location.reload();
                requestAnimationFrame(draw); // Needed for chrome to end game
            }
            else {
                x = canvas.width / 2;
                y = canvas.height - 30;
                dx = 2;
                dy = -2;
                paddleX = (canvas.width - paddleWidth) / 2;
            }
        }
    }

    x += dx;
    y += dy;
}