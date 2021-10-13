import Game from "/src/game.js";
import Tracker from "/src/tracker.js";

let canvas = document.getElementById('gameScreen');
let c = canvas.getContext('2d');
const GAME_WIDTH = 600;
const GAME_HEIGHT = 600;
let x = 30;
let y = 570;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
let tracker = new Tracker(x, y);

canvas.requestPointerLock = canvas.requestPointerLock ||
    canvas.mozRequestPointerLock;

document.exitPointerLock = document.exitPointerLock ||
    document.mozExitPointerLock;

canvas.onclick = function () {
    canvas.requestPointerLock();
};

// Hook pointer lock state change events for different browsers
document.addEventListener('pointerlockchange', lockChangeAlert, false);
document.addEventListener('mozpointerlockchange', lockChangeAlert, false);

function lockChangeAlert() {
    if (document.pointerLockElement === canvas ||
        document.mozPointerLockElement === canvas) {
        console.log('The pointer lock status is now locked');
        document.addEventListener("mousemove", updatePosition, false);
    } else {
        console.log('The pointer lock status is now unlocked');
        document.removeEventListener("mousemove", updatePosition, false);
    }
}

let mouseTracker = document.getElementById('mouseTracker');
function updatePosition(e){
    x += e.movementX;
    y += e.movementY;
    mouseTracker.textContent = "X position: " + x + ", Y position: " + y;
}

function gameLoop() {
    c.clearRect(0, 0, 600, 600);
    game.draw(c);
    game.hitCheck(x, y);
    tracker.updatePos(x, y);
    tracker.draw(c);
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
