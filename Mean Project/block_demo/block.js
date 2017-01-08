var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var blockWidth = 30;
var blockHeight = 15;
var blockSpeed = 10;
var block = {
    x: 0,
    y: canvas.height - blockHeight,
    width: blockWidth,
    height: blockHeight,
    blockSpeed: blockSpeed
}

document.onkeydown = function (event) {
    if (event.keyCode == 39) {
        block.x += block.blockSpeed;
        if (block.x >= canvas.width - block.width) {
            continueAnimating = false;
            alert("Completed with a score of " + score);
        }
    } else if (event.keyCode == 37) {
        block.x -= block.blockSpeed;
        if (block.x <= 0) {
            block.x = 0;
        }
    }
}
$("#start").click(function () {
    score = startingScore
    block.x = 0;
    for (var i = 0; i < rocks.length; i++) {
        resetRock(rocks[i]);
    }
    if (!continueAnimating) {
        continueAnimating = true;
        animate();
    };
});
