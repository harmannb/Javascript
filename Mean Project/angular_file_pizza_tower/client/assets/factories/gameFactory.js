anguapp.factory('gameFactory',function(){
  console.log("i am factory");
   factory={};
   var no_of_player = [];

   factory.saveFormData = function(player,callback){
     factory.player = player;
     callback();
   }

   factory.existing_players = function(existing_player){
     factory.existing_player = existing_player;
     console.log("this is factory players",factory.existing_player);
     no_of_player.push(existing_player);

   }

   factory.playgame = function(player,canvas,calback){
    var ctx, //context
      imgBg, //background Image
      x = 0,
      y = 0,
      noOfPizzas = 10,
      chef_image = [],
      fallingPizzas = [],
      stack =[], //Stack of Pizza
      chefimgx,    //x point where pizza has to stack
      pushed = false, //pushed to stack[]
      endpt, //The line to end
      pizza_itvl, //setinterval function
      endline = 650,
      abc;

    function createPizza(){
      for(var i = 0; i < noOfPizzas; i++) {
            var fallingDr = new Object();
            fallingDr["image"] =  new Image();
            fallingDr.image.src = 'pizza2.png';
            fallingDr["x"] = Math.random() * 1000;
            fallingDr["y"] = Math.random() * 5;
            fallingDr["speed"] = 3 + Math.random() * 5;
            fallingPizzas.push(fallingDr);
              xpt = fallingPizzas[0].x;
          }

          console.log("the no of player", no_of_player);
      // for(var j = 0; j < no_of_player.length; j++){

          var chefimgx = new Object();
          chefimgx["image"] = new Image();
          // chefimgx.image.id = "chef";
          chefimgx.image.src = 'chef.png';
          chefimgx["x"] = 530;
          // chefimgx["x"] = Math.random() * 500;//530;
          chefimgx["y"] = 530;
          chefimgx["speed"] = 1;
          abc = chefimgx.y - 10;
          endpt = abc;
          console.log(ctx);
          chef_image.push(chefimgx);

            //draw chef image
          // }

    }
    function drawBackground(){
        ctx.drawImage(imgBg, 0, 0); //Background
      //   for(var j = 0; j < no_of_player.length; j++){
      //   console.log(no_of_player, "console logged the nimber of players", j);
      //   ctx.drawImage(chef_image[j].image, chef_image[j].x, chef_image[j].y);
      // }
    }

// Falling of pizzas
    function draw() {

    drawBackground();
      //draws background Img
    
    moving_image();  //moving chef image
        for (var i=0; i< noOfPizzas; i++) {
          // for(var loop_count = 0; loop_count < chef_image; loop_count++){
            ctx.drawImage (fallingPizzas[i].image, fallingPizzas[i].x, fallingPizzas[i].y); //The rain drop
            fallingPizzas[i].y += fallingPizzas[i].speed;
            //Set the falling speed
            if(fallingPizzas[i].x >chefimgx.x-10 && fallingPizzas[i].x <chefimgx.x+10){
            // console.log("this is y",fallingPizzas[i].y )
              if(fallingPizzas[i].y > endpt){ //stack pizza when it reached endpt.
              // console.log("thi sis draw()");
                  stack.push(true);
                  pushed = true;
                  fallingPizzas[i].y = -25;
                  fallingPizzas[i].x = Math.random() * 1000;
                }
            }
            if (fallingPizzas[i].y > endline) {  //Repeat the pizzadrop when it falls out of view
                fallingPizzas[i].y = -25;
                fallingPizzas[i].x =  Math.random() * 1000;
            }

          // }
        }

// Clone and Stack Pizzas
      if(pushed = true){
          for(var j = 0; j< stack.length; j++){
          var s = fallingPizzas[0].image.cloneNode(true);
          endpt = abc-(j*15);
          ctx.drawImage(s, chefimgx.x, endpt);
          if(endpt <= 0){
            prompt("YOU WON");
            clearInterval(pizza_itvl);
          }
        }
        pushed = false;
      }
    }
    function setup(canvas) {
        canvas = document.getElementById('canvasRegn');
        if (canvas.getContext) {
                ctx = canvas.getContext('2d');
                    imgBg = new Image();
            imgBg.src = "restaurant.png";
          pizza_itvl = setInterval(draw, 10);
          createPizza();
        }
    }

function moving_image(){

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

        function keyDownHandler(e) {
            if(e.keyCode == 39) {
              if(chefimgx.x < 1100){
                chefimgx.x += 0.04;
              }
            }
            else if(e.keyCode == 37) {
              if(chefimgx.x > 0){
                chefimgx.x -= 0.04;
              }
            }
        }
        function keyUpHandler(e) {
            if(e.keyCode == 39) {
                rightPressed = false;
            }
            else if(e.keyCode == 37) {
                leftPressed = false;
            }
        }
    }

    setup(canvas);

    // for image uploading
   function showMyImage(fileInput) {
        var files = fileInput.files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var imageType = /image.*/;
            if (!file.type.match(imageType)) {
                continue;
            }
            var img=document.getElementById("thumbnil");
            img.file = file;
            var reader = new FileReader();
            reader.onload = (function(aImg) {
                return function(e) {
                    chefimgx.image.src = e.target.result;
                };
            })(img);
            reader.readAsDataURL(file);
        }
    }

   }
 
  return factory;
})
