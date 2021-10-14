export default class Tracker {

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    updatePos(xpos, ypos){
        this.x = xpos;
        this.y = ypos;
    }

    draw(c){
        c.fillStyle = "red";
        c.beginPath();
        c.arc(this.x, this.y, 7, 0, Math.PI * 2, false);
        c.fill();
    }
    
} 