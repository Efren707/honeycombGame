export default class Game {

    constructor(gameWidth, gameHeight){
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.currentLevel = 1;
        this.health = 100;
    }

    draw(c){
        // Green game square
        c.fillStyle = '#219e66';
        c.fillRect(0, 0, this.gameWidth, this.gameHeight);
        c.beginPath();
        c.moveTo(0, 100);
        c.lineTo(700, 100);
        c.closePath();
        c.lineWidth = 6;
        c.strokeStyle = "black";
        c.stroke();
        c.fillStyle = 'black';
        c.font = '23px azonix';
        c.fillText('Level: ' + this.currentLevel, 20, 40 )
        c.fillText('Health: ' + this.health + '%', 20, 80);

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

        if (this.currentLevel === 1){
            c.beginPath();
            c.moveTo(180, 460);
            c.lineTo(300, 190);
            c.lineTo(430, 460);
            c.closePath();
            c.lineWidth = 30;
            c.strokeStyle = "#b0881a";
            c.stroke();

            c.beginPath();
            c.moveTo(300, 225);
            c.lineTo(300, 155);
            c.closePath();
            c.lineWidth = 2;
            c.strokeStyle = "red";
            c.stroke();

            c.fillStyle = "blue";
            c.beginPath();
            c.arc(312, 210, 7, 0, Math.PI * 2, false);
            c.fill();
        } else if(this.currentLevel === 2){
            // square
            c.lineWidth = 25;
            c.strokeStyle = "#b0881a";
            c.strokeRect(180, 220, 245, 245);

            c.beginPath();
            c.moveTo(300, 231);
            c.lineTo(300, 210);
            c.closePath();
            c.lineWidth = 2;
            c.strokeStyle = "red";
            c.stroke();

            c.fillStyle = "blue";
            c.beginPath();
            c.arc(312, 220, 7, 0, Math.PI * 2, false);
            c.fill();
        } else if(this.currentLevel === 3){
            // circle
            c.beginPath();
            c.arc(300, 350, 170, 0, Math.PI * 2, false);
            c.lineWidth = 30;
            c.strokeStyle = "#b0881a";
            c.stroke();

            c.beginPath();
            c.moveTo(300, 195);
            c.lineTo(300, 165);
            c.closePath();
            c.lineWidth = 2;
            c.strokeStyle = "red";
            c.stroke();

            c.fillStyle = "blue";
            c.beginPath();
            c.arc(315, 180, 7, 0, Math.PI * 2, false);
            c.fill();
        } else if (this.currentLevel === 4) {
            let cx = 300;
            let cy = 350;
            let spikes = 5;
            let outerRadius = 150;
            let innerRadius = 58;
            let rot = Math.PI / 2 * 3;
            let sx = cx;
            let sy = cy;
            let step = Math.PI / spikes;

            c.beginPath();
            c.moveTo(cx, cy - outerRadius)
            for (let i = 0; i < spikes; i++) {
                sx = cx + Math.cos(rot) * outerRadius;
                sy = cy + Math.sin(rot) * outerRadius;
                c.lineTo(sx, sy)
                rot += step

                sx = cx + Math.cos(rot) * innerRadius;
                sy = cy + Math.sin(rot) * innerRadius;
                c.lineTo(sx, sy)
                rot += step
            }
            c.lineTo(cx, cy - outerRadius);
            c.closePath();
            c.lineWidth = 22;
            c.strokeStyle = '#b0881a';
            c.stroke();

            c.beginPath();
            c.moveTo(300, 235);
            c.lineTo(300, 168);
            c.closePath();
            c.lineWidth = 2;
            c.strokeStyle = "red";
            c.stroke();

            c.fillStyle = "blue";
            c.beginPath();
            c.arc(313, 234, 7, 0, Math.PI * 2, false);
            c.fill();
        } else if (this.currentLevel === 5){
            c.rect(0, 0, this.gameWidth, this.gameHeight);
            c.fillStyle = "rgba(0,0,0,1)";
            c.fill();
            
            c.font = "60px azonix";
            c.fillStyle = "yellow";
            c.textAlign = "center";
            c.fillText(
                "YOU WIN ! ! !",
                this.gameWidth / 2,
                this.gameHeight / 2
            );
        } else if (this.currentLevel === 6) {
            c.rect(0, 0, this.gameWidth, this.gameHeight);
            c.fillStyle = "rgba(0,0,0,1)";
            c.fill();

            c.font = "60px azonix";
            c.fillStyle = "red";
            c.textAlign = "center";
            c.fillText(
                "YOU LOSE",
                this.gameWidth / 2,
                this.gameHeight / 2
            );
        }
    }

    insideTriangle = function (x, y){
        function outterLeft(x) {
            return Math.floor(((-294 / 131) * x) + (110863 / 131));
        }; 

        if (outterLeft(x) === y - 1 || outterLeft(x) === y || outterLeft(x) === y + 1 || outterLeft(x) > y + 1) {
            return true;
        }

        function outterRight(x) {
            return Math.floor(((98 / 47) * x) - (21269 / 47));
        };

        if (outterRight(x) === y - 1 || outterRight(x) === y || outterRight(x) > y + 1) {
            return true;
        }

        function innerLeft(x){
            return Math.floor(((11/-5)*x) + 877);
        }

        if (x < 300 && x > 205 && y > 217 && y < 453) {
            if (innerLeft(x) === y || innerLeft(x) === 1 + y || innerLeft(x) === 1 - y || innerLeft(x) < 1 - y) {
                return true;
            }
        }

        function innerRight(x) {
            return Math.floor(((231 / 113) * x) - (44779 / 113));
        }

        if (x > 300 && x < 413 && y > 217 && y < 453) {
            if (innerRight(x) === y || innerRight(x) === 1 + y || innerRight(x) === 1 - y) {
                return true;
            }
        }

        let outterBottom = 469;
        let innerBottom = 452;

        if(outterBottom < y){
            return true;
        }

        if(x > 195 && x < 413 && y === innerBottom){
            return true;
        }

        return false;
    }

    insideSquare = function (x, y){
        let outterLeft = 175;
        let outterRight = 430;
        let outterTop = 215;
        let outterBottom = 470;

        let innerTop = 225;
        let innerBottom = 460;
        let innerLeft = 185;
        let innerRight = 420;

        if (x < outterLeft || x > outterRight ){ 
            return true;
        } else if(y < outterTop || y > outterBottom){ 
            return true;
        } else if (x > innerLeft && x < innerRight && y > innerTop && y < innerBottom){
            return true;
        }

        return false;
    }

    insideStar = function (x, y) {

    // Upper Straight Left #2
    if (x < 265 && x > 118 && y < 299) {
        return true;
    }

    // Inner Straight Left #2
    if (x < 281 && x > 184 && y === 308) {
        return true;
    }

    // Upper Top Left #1
    function upperTopLeft(x) {
        return Math.floor(((121 / -40) * x) + (8765 / 8));
    }

    if (x < 300 && x > 265 && y < 299) {
        if (upperTopLeft(x) === y || upperTopLeft(x) > y - 1) {
            return true;
        }
    }

    // Inner Top Left #1
    function innerTopLeft(x) {
        return Math.floor(((38 / -13) * x) + (14175 / 13));
    }

    if (x < 294 && x > 269 && y > 231 && y < 307) {
        if (innerTopLeft(x) === y || innerTopLeft(x) === y - 1) {
            return true;
        }
    }

    // Upper Straight Right #9
    if (x < 482 && x > 335 && y < 299) {
        return true;
    }

    // Inner Straight Right #9
    if (x < 417 && x > 319 && y === 308) {
        return true;
    }

    // Upper Top Right #10
    function upperTopRight(x) {
        return Math.floor(((100 / 33) * x) - (23797 / 33));
    }

    if (x > 300 && x < 334 & y > 191 && y < 291) {
        if (upperTopRight(x) === y || upperTopRight(x) > y - 1) {
            return true;
        }
    }

    // Inner Top Right #10
    function innerTopRight(x) {
        return Math.floor(((74 / 25) * x) - (16918 / 25));
    }

    if (x > 307 && x < 332 & y > 232 && y < 306) {
        if (innerTopRight(x) === y || innerTopRight(x) === y - 1) {
            return true;
        }
    }

    // Top of star
    if (x === 300 && y === 228) {
        return true;
    }

    // // Upper Down Left #3
    function upperDownLeft(x) {
        return Math.floor(((65 / 89) * x) + (17145 / 89));
    }

    if (x > 147 && x < 236 && y < 365 && y > 300) {
        if (upperDownLeft(x) < y - 2) {
            return true;
        }
    }

    // Inner Down Left #3
    function innerDownLeft(x) {
        return Math.floor(((45 / 61) * x) + (11182 / 61));
    }

    if (x > 188 && x < 249 && y < 367 && y > 322) {
        if (innerDownLeft(x) === y + 1) {
            return true;
        }
    }

    // Upper Up Left #4
    function upperUpLeft(x) {
        return Math.floor(((-116 / 37) * x) + (41599 / 37));
    }

    if (x > 202 && x < 239 && y < 491 && y > 375) {
        if (upperUpLeft(x) > y) {
            return true;
        }
    }

    // Inner Up Left #4
    function innerUpLeft(x) {
        return Math.floor(((-19 / 6) * x) + (2311 / 2));
    }

    if (x > 225 && x < 249 && y < 443 && y > 367) {
        if (innerUpLeft(x) === y || innerUpLeft(x) === y - 2 || innerUpLeft(x) === y - 1) {
            return true;
        }
    }

    // Upper In Left #5
    function upperInLeft(x) {
        return Math.floor(((-71 / 99) * x) + (20719 / 33));
    }

    if (x > 195 && x < 294 && y < 488 && y > 417) {
        if (upperInLeft(x) < y) {
            return true;
        }
    }

    // Inner In Left #5
    function innerInLeft(x) {
        return Math.floor(((-45 / 62) * x) + (19274 / 31));
    }

    if (x > 238 && x < 300 && y < 449 && y > 404) {
        if (innerInLeft(x) === y) {
            return true;
        }
    }

    // Bottom of star
    if (x === 300 && y === 404) {
        return true;
    }

    // Upper In Right #6
    function upperInRight(x) {
        return Math.floor(((65 / 89) * x) + (17158 / 89));
    }

    if (x > 307 && x < 396 && y < 482 && y > 417) {
        if (upperInRight(x) < y - 1) {
            return true;
        }
    }

    // Inner In Right #6
    function innerInRight(x) {
        return Math.floor(((45 / 62) * x) + (5774 / 31));
    }

    if (x > 300 && x < 362 && y < 449 && y > 404) {
        if (innerInRight(x) === y) {
            return true;
        }
    }

    // Upper Up Right #7
    function upperUpRight(x) {
        return Math.floor(((105 / 34) * x) - (12596 / 17));
    }

    if (x > 362 && x < 396 && y < 482 && y > 377) {
        if (upperUpRight(x) === y || upperUpRight(x) > y + 1) {
            return true;
        }
    }

    // Inner Up Right #7
    function innerUpRight(x) {
        return Math.floor(((72 / 23) * x) - (16831 / 23));
    }

    if (x > 351 && x < 374 && y < 439 && y > 367) {
        if (innerUpRight(x) === y || innerUpRight(x) === y - 1) {
            return true;
        }
    }

    // Upper Down Right #8
    function upperDownRight(x) {
        return Math.floor(((-65 / 88) * x) + (27955 / 44));
    }

    if (x > 366 && x < 454 && y < 365 && y > 300) {
        if (upperDownRight(x) < y) {
            return true;
        }
    }

    // Inner Down Right #8
    function innerDownRight(x) {
        return Math.floor(((-23 / 31) * x) + (19450 / 31));
    }

    if (x > 351 && x < 413 && y < 367 && y > 321) {
        if (innerDownRight(x) === y + 1) {
            return true;
        }
    }
}

    insideCircle = function(x, y){
        let x2=300; 
        let y2=350
        let xDist = x2 - x;
        let yDist = y2 - y;
        let dist = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));

        if(dist > 177 || dist < 163){
            return true;
        }
    
    }

    hitCheck(x, y){
        // Level 1
        if(this.currentLevel === 1 && this.insideTriangle(x,y)){
            this.health--;
        } else if (this.currentLevel === 1 && x === 300 && y > 155 && y < 450){
            this.health = 0;
        }

        if (this.currentLevel === 1 && x === 312 && y === 210 && this.health > 0) {
            this.health += 20;
            this.currentLevel++;
        }

        // Level 2
        if (this.currentLevel === 2 && this.insideSquare(x, y)) {
            this.health--;
        } else if(this.currentLevel === 2 && x === 300 && y > 210 && y < 231){
            this.health = 0;
        }

        if (this.currentLevel === 2 && x === 312 && y === 220 && this.health > 0) {
            this.health += 20;
            this.currentLevel++;
        }

        // Level 3
        if (this.currentLevel === 3 && this.insideCircle(x, y)) {
            this.health--;
        } else if (this.currentLevel === 3 && x === 300 && y < 195 && y > 165) {
            this.health = 0;
        }

        if (this.currentLevel === 3 && x === 315 && y === 180 && this.health > 0) {
            this.health += 20;
            this.currentLevel++;
        }

        // Level 4
        if (this.currentLevel === 4 && this.insideStar(x, y)) {
            this.health--;
        } else if (this.currentLevel === 4 && x === 300 && y < 385 && y > 168) {
            this.health = 0;
        }

        if (this.currentLevel === 4 && x === 313 && y === 234 && this.health > 0) {
            this.health += 20;
            this.currentLevel++;
        }

        if(this.health <= 0){
            this.currentLevel = 6;
        }

    }

    
}