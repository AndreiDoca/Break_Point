
// import { ctx } from './canvas.js';
// import { x, y, setDy } from './ball.js'

// //  Vars for the rows and bricks paddings

export var brickRowCount = 5;
export var brickColumnCount = 2;
export var brickWidth = 75;
export var brickHeight = 20;
export var brickPadding = 10;
export var brickOffsetTop = 30;
export var brickOffsetLeft = 30;


// // Create an array to draw the bricks

// var bricks = [];
// for (var c = 0; c < brickColumnCount; c++) {
//     bricks[c] = [];
//     for (var r = 0; r < brickRowCount; r++) {
//         bricks[c][r] = { x: 0, y: 0, status: 1 } // add a status to the bricks so we can remove when hit
//     }
// }

// // drawing the bricks

// export const drawBricks = () => {
//     for (var c = 0; c < brickColumnCount; c++) {
//         for (var r = 0; r < brickRowCount; r++) {
//             if (bricks[c][r].status == 1) {
//                 var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
//                 var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
//                 bricks[c][r].x = brickX;
//                 bricks[c][r].y = brickY;
//                 ctx.beginPath();
//                 ctx.rect(brickX, brickY, brickWidth, brickHeight);
//                 ctx.fillStyle = "#0095DD";
//                 ctx.fill();
//                 ctx.closePath();
//             }
//         }
//     }
// }


// // Lets break some brick


// export const collisionDetection = () => {
//     for (var c = 0; c < brickColumnCount; c++) {
//         for (var r = 0; r < brickRowCount; r++) {
//             var b = bricks[c][r];
//             if (b.status == 1) {
//                 if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
//                     setDy = -setDy
//                     b.status = 0;
//                 }
//             }
//         }
//     }
// }


