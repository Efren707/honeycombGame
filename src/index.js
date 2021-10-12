import Tracker from '/src/tracker.js';


let canvas = document.getElementById('gameScreen');
let c = canvas.getContext('2d');
const GAME_WIDTH = 600;
const GAME_HEIGHT = 600;
let Xpos = 300;
let Ypos = 300;

// Start/Stop pointer lock
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
};

let tracker = new Tracker(Xpos, Ypos);
tracker.draw(c);

let mouseTracker = document.getElementById('mouseTracker');
let animation;

function updatePosition(e) {
    Xpos += e.movementX;
    Ypos += e.movementY;

    mouseTracker.textContent = "X position: " + Xpos + ", Y position: " + Ypos;

    if (!animation) {
        animation = requestAnimationFrame(function () {
            animation = null;
            c.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
            tracker.update(Xpos, Ypos);
            tracker.draw(c);
        });
    }
    
}

