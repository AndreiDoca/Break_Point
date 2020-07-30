
import { ctx, canvas } from './canvas.js';


export var score = 0
export function setScore(value) {
    score = value;
}


export var lives = 3



export function setLives(value) {
    lives = value;
}

export const drawScore = () => {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
}

export const drawLives = () => {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}