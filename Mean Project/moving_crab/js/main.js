

// // var ctx;
// // var imgBg;
// // var imgDrops;
// // var x = 0;
// // var y = 0;
// // var noOfDrops = 10;
// // var fallingDrops = [];

function PlayGround(selector_ch1)
{
    var ch1 = new Character(selector_ch1);

    this.initialize = function()
    {
        $(document).keydown(function(e){
            if(e.keyCode == 39){
                ch1.updateAction('MOVE_RIGHT');
            }
            else if(e.keyCode == 37){
                ch1.updateAction('MOVE_LEFT');
            }
        });
    }

    this.mainLoop = function()
    {
        ch1.drawCharacter();
    }
}


function Character(selector)
    {
        var selector = selector;

        var constants = {
            'STILL': { 'y': 1, 'x': [0,1,2,3] },
            'MOVE_RIGHT': { 'y': 3, 'x': [0,1,2] },
            'MOVE_LEFT': { 'y': 3, 'x': [2,3,4] }
        }

        var counter = 0;
        this.action = 'STILL';
        this.ch_x=0;
        this.ch_y=0;

        this.drawSprite = function(y,x)
        {
            $('#'+selector).css('background', "url('images/crabchef.png') "+x*(-170)+"px "+(-170*y)+"px").css('left', this.ch_x+"px");
        }

        this.updateAction = function(action)
        {
            counter=0;
            this.action = action;
        }

        this.updateCoordinate = function()
        {

            if(counter>=constants[this.action].x.length)
            {
                counter=0;
                this.action ='STILL';
            }

            if(this.action == 'MOVE_LEFT')
                this.ch_x = this.ch_x-10;
            else if(this.action == 'MOVE_RIGHT')
                this.ch_x = this.ch_x+10;

        }

        this.drawCharacter = function()
        {
            // console.log("drawing character");
            this.updateCoordinate();
            this.drawSprite(constants[this.action].y, constants[this.action].x[counter++])
        }
    }






    function drawBackground(){
        ctx.drawImage(imgBg, 0, 0); //Background
    }

    function draw() {
        drawBackground();

        for (var i=0; i< noOfDrops; i++)
        {
        ctx.drawImage (fallingDrops[i].image, fallingDrops[i].x, fallingDrops[i].y); //The rain drop

        fallingDrops[i].y += fallingDrops[i].speed; //Set the falling speed
        if (fallingDrops[i].y > 650) {  //set the height of rain upto which point
        fallingDrops[i].y = -10 //Account for the image size
        fallingDrops[i].x = Math.random() * 1500;    //Make it appear randomly along the width
        }

        }
    }

// //     function setup() {
// //         var canvas = document.getElementById('canvasRegn');

// //         if (canvas.getContext) {
// //                 ctx = canvas.getContext('2d');

// //                     imgBg = new Image();
// //             imgBg.src = "tower.jpeg";
// //         setInterval(draw, 10);   //speed of pizza
// //         for (var i = 0; i < noOfDrops; i++) {
// //             var fallingDr = new Object();
// //             fallingDr["image"] =  new Image();
// //         fallingDr.image.src = 'pizza2.png';

// //             fallingDr["x"] = Math.random() * 8000;
// //             fallingDr["y"] = Math.random() * 8000;
// //             fallingDr["speed"] = 1 + Math.random() * 2;
// //             fallingDrops.push(fallingDr);
// //             }

// //         }
// //     }




// // setup();




