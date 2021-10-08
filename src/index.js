document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    function canvasDraw(){
        ctx.fillStyle = '#006A35';
        ctx.fillRect(10, 10, canvas.height, canvas.width);
    }

    canvasDraw();

});