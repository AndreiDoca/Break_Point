
import { ctx, canvas } from './canvas.js';

export var score = 0
export var lives = 3

export const drawScore = () => {
    ctx.font = '16px Arial'
    ctx.fillStyle = '#0095DD'
    ctx.fillText('score: ' + score, 8, 20)
}

export const drawLives = () => {
    ctx.font = '16px Arial'
    ctx.fillStyle = '#0095DD'
    ctx.fillText('score: ' + lives, canvas.width - 65, 20)
}