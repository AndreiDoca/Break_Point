
import { ctx, canvas } from './canvas.js';

import { score } from './score.js';

export var x = canvas.width / 2;
export var y = canvas.height - 30;
export var dy = -2;
//  Vars for the rows and bricks paddings

var dy = -2;
var brickRowCount = 3;
var brickComumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;


// Create an array to draw the bricks

var bricks = [];
for (let c = 0; c < brickComumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 } // add a status to the bricks so we can remove when hit
    }
}

// drawing the bricks

export const drawBricks = () => {
    for (let c = 0; c < brickComumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            // DRAW THE BRICKS ONLY IF STATUS = 1
            if (bricks[c][r].status == 1) {




                // set some vars for brick position
                var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;


                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight)
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();

            }
        }
    }
}


// Lets break some brick

export const breakBricks = () => {
    for (let c = 0; c < brickComumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r]; // need to set the status to 0 if hit the ball
            if (b.status == 1) {

                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy //Chaning direction of the ball if hits a brick
                    b.status = 0;
                    score++;
                    if (score == brick * brickComumnCount) {
                        alert('WINNER WINNER CHICKEN DINNER!')
                        document.location.reload();
                        requestAnimationFrame(draw); // Needed for chrome to end game
                    }
                }
            }
        }
    }
}

