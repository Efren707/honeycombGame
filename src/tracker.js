export default class Tracker {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.radius = 7;
        this.startAngle = 0;
        this.endAngle = Math.PI * 2;
        this.counterClk = false;
    }

    draw(c){
        c.fillStyle = "red";
        c.beginPath();
        c.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.counterClk);
        c.fill();
    }

    
    update(Xmovement, Ymovement){
        this.x = Xmovement;
        this.y = Ymovement;
    }

}