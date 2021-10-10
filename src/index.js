document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    let canvas = document.getElementById('canvas');
    canvas.height = 600;
    canvas.width = 600;
    let c = canvas.getContext('2d');

    let x = 300;
    let y = 200;
    const RADIUS = 1;
    
    function canvasDraw(){
        // Green game square
        c.fillStyle = '#219e66';
        c.fillRect(0, 0, canvas.width, canvas.height);
        c.beginPath();
        c.moveTo(0, 100);
        c.lineTo(700, 100);
        c.closePath();
        c.lineWidth = 6;
        c.strokeStyle = "black";
        c.stroke();

        //Pan
        c.beginPath();
        c.arc(300, 350, 230, 0, Math.PI * 2, false);
        c.fillStyle = "#bdbdbd"
        c.fill();
        c.lineWidth = 8;
        c.strokeStyle = "#5e5e5e";
        c.stroke();

        //honeycomb
        c.beginPath();
        c.arc(300, 350, 210, 0, Math.PI * 2, false);
        c.fillStyle = "#ebd142"
        c.fill();

        // triangle
        c.beginPath();
        c.moveTo(180, 460);
        c.lineTo(300, 190);
        c.lineTo(430, 460);
        c.closePath();
        c.lineWidth = 30;
        c.strokeStyle = "#b0881a";
        c.stroke();

        // square
        // c.lineWidth = 25;
        // c.strokeStyle = "#b0881a";
        // c.strokeRect(180, 220, 245, 245);

        // circle
        // c.beginPath();
        // c.arc(300, 350, 170, 0, Math.PI * 2, false);
        // c.lineWidth = 30;
        // c.strokeStyle = "#b0881a";
        // c.stroke();

        // tracker
        c.fillStyle = "red";
        c.beginPath();
        c.arc(x, y, RADIUS, 0, Math.PI * 2, true);
        c.fill();
    }

    canvasDraw();
    let tracker = document.getElementById('tracker');
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

    // function getCircleDistance(x1, y1, x2=300, y2=350){
    //     let xDist = x2 - x1;
    //     let yDist = y2 - y1;
    //     return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    // }

    // function insideSquare(x, y){
    //     let outterLeft = 175;
    //     let outterRight = 430;
    //     let outterTop = 215;
    //     let outterBottom = 470;

    //     let innerTop = 225;
    //     let innerBottom = 460;
    //     let innerLeft = 185;
    //     let innerRight = 420;

    //     if (x < outterLeft || x > outterRight ){ 
    //         return true;
    //     } else if(y < outterTop || y > outterBottom){ 
    //         return true;
    //     } else if (x > innerLeft && x < innerRight && y === innerTop) {
    //         return true;
    //     } else if (y > innerTop && y < innerBottom && x === innerRight) {
    //         return true;
    //     } else if (y > innerTop && y < innerBottom && x === innerLeft) {
    //         return true;
    //     } else if (x > innerLeft && x < innerRight && y === innerBottom) {
    //         return true;
    //     }

    //     return false;
    // }

    function insideTriangle(x, y){
        let outterLeft = [];
        let outterRight = [];
        let outterBottom = 475;
    }
    
    
    let animation;

    function updatePosition(e) {
        x += e.movementX;
        y += e.movementY;

        tracker.textContent = "X position: " + x + ", Y position: " + y;

        // if(getCircleDistance(x, y) > 177 || (getCircleDistance(x, y) < 163)){
        //     alert('out of bounds');
        // }

        // if(insideSquare(x, y)){
        //     alert('out of bounds');
        // }

        if(insideTriangle(x, y)){
            alert('out of bounds');
        }

        if (!animation) {
            animation = requestAnimationFrame(function () {
                animation = null;
                canvasDraw();
            });
        }
    }

});

// function Star(cx=300, cy=350, spikes=5, outerRadius=150, innerRadius=60) {
    //     var rot = Math.PI / 2 * 3;
    //     var x = cx;
    //     var y = cy;
    //     var step = Math.PI / spikes;

    //     this.draw = function() {
    //         c.beginPath();
    //         c.moveTo(cx, cy - outerRadius)
    //         for (i = 0; i < spikes; i++) {
    //             x = cx + Math.cos(rot) * outerRadius;
    //             y = cy + Math.sin(rot) * outerRadius;
    //             c.lineTo(x, y)
    //             rot += step

    //             x = cx + Math.cos(rot) * innerRadius;
    //             y = cy + Math.sin(rot) * innerRadius;
    //             c.lineTo(x, y)
    //             rot += step
    //         }
    //         c.lineTo(cx, cy - outerRadius);
    //         c.closePath();
    //         c.lineWidth = 30;
    //         c.strokeStyle = 'black';
    //         c.stroke();
    //     }
    // }