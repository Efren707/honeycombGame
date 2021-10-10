document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    let canvas = document.getElementById('canvas');
    canvas.height = 600;
    canvas.width = 600;
    let c = canvas.getContext('2d');

    let x = 300;
    let y = 300;

    // function GameView(){
        
    //     this.draw = function(){

    //         // Green game square
    //         c.fillStyle = '#219e66';
    //         c.fillRect(0, 0, canvas.width, canvas.height);
    //         c.beginPath();
    //         c.moveTo(0, 100);
    //         c.lineTo(700, 100);
    //         c.closePath();
    //         c.lineWidth = 6;
    //         c.strokeStyle = "black";
    //         c.stroke();

    //         //Pan
    //         c.beginPath();
    //         c.arc(300, 350, 230, 0, Math.PI * 2, false);
    //         c.fillStyle = "#bdbdbd"
    //         c.fill();
    //         c.lineWidth = 8;
    //         c.strokeStyle = "#5e5e5e";
    //         c.stroke();

    //         //honeycomb
    //         c.beginPath();
    //         c.arc(300, 350, 210, 0, Math.PI * 2, false);
    //         c.fillStyle = "#ebd142"
    //         c.fill();
    //     }

    // }


    // function Triangle() {

    //     this.draw = function () {
    //         c.beginPath();
    //         c.moveTo(180, 460);
    //         c.lineTo(300, 190);
    //         c.lineTo(430, 460);
    //         c.closePath();
    //         c.lineWidth = 30;
    //         c.strokeStyle = "black";
    //         c.stroke();
    //     }

    // }

    // function Square() {

    //     this.draw = function() {
    //         c.lineWidth = 27;
    //         c.strokeStyle = "black";
    //         c.strokeRect(180, 220, 245, 245);
    //     }
    // }

    // function Star(cx, cy, spikes, outerRadius, innerRadius) {
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

    // function Circle () {
        
    //     this.draw = function(){
    //         c.beginPath();
    //         c.arc(300, 350, 170, 0, Math.PI * 2, false);
    //         c.lineWidth = 30;
    //         c.strokeStyle = "black";
    //         c.stroke();
    //     }
    // }
    
    // let game = new GameView();
    // let triangle = new Triangle();
    // let square = new Square();
    // let star = new Star(300, 350, 5, 150, 60);
    // let circle = new Circle();
    // game.draw();
    // triangle.draw();
    // square.draw();
    // star.draw();
    // circle.draw();

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
        c.strokeStyle = "black";
        c.stroke();

        // tracker
        c.fillStyle = "red";
        c.beginPath();
        c.arc(x, y, 10, 0, Math.PI * 2, true);
        c.fill();
    }

    canvasDraw();
    
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


    let animation;

    function updatePosition(e) {
        x += e.movementX;
        y += e.movementY;

        if (!animation) {
            animation = requestAnimationFrame(function () {
                animation = null;
                canvasDraw();
            });
        }
    }

});