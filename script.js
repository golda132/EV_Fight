var player1;
var player2;
var speed

var bgImg;

var gameOver = false;
var Starting  = true;
var Opening = true;
function preload() {
  bgImg = loadImage("bg.jpg");
}

function setup() {
  createCanvas(800, 600);

  player1 = new Fighter(140, height - 150, 'blue');
  player2 = new Fighter(650, height - 150, 'red');
}

class Fighter { 
  constructor(x, y, color) {  
    this.x = x;   
    this.x > 0;
    this.y = y;    
    this.y > 0;
    this.width = 50;    
    this.height = 100;   
    this.color = color;    
    this.health = 100; 
    this.speed = 5;
  }

  draw() {
    fill("white");

    rect(this.x, this.y, this.width, this.height); 
  }

  moveLeft() {    
    this.x -= 5;
    if (this.x < 0){ 
      this.x = 0;
    }
  }
  moveRight() {    
    if (this.x < width - this.width ){ 
      this.x += 5; 
    }
  }
  attack(opponent) {    
    if (this.x + this.width >= opponent.x && this.x <= opponent.x + opponent.width) {    

      if (opponent.health > 0) {
        opponent.health -= 10;   
      } else {
        gameOver = true;
      }
    }  
   }

}

function options() {  
  console.log("Opening options menu...");
}

function draw() {   
  background(bgImg);    

  if (Starting) {
    fill("pink");    
    textSize(34);    
    text("Press Enter to start", width / 2 - 120, height / 2);    
  }
  
  if (gameOver) {

    fill("white");    
    textSize(32);    
    text("Game Over", width / 2 - 80, height / 2);    
    
  } else {

    if (keyIsPressed) {
      if (key == "a") {
        player1.moveLeft();
      }
      if (key == "d") {
        player1.moveRight();
      }
      if (keyCode == LEFT_ARROW) {
        player2.moveLeft();
      }
      if (keyCode == RIGHT_ARROW) {
        player2.moveRight();
      }
    }
  
    player1.draw();  
    player2.draw(); 
  
    stroke("black");
    fill("black");
    strokeWeight(1);
    rect(10, 10, 100, 20);
    fill("lightgreen");
    rect(10, 10, player1.health, 20);
  
    stroke("black");
    fill("black");
    strokeWeight(1);
    rect(680, 10, 100, 20);
    fill("lightgreen");
    rect(680, 10, player2.health, 20);
    
    stroke("black");
    fill("black");
    strokeWeight(1);
    rect(380, 10, 50, 50);
    fill("lightgreen");
   
    stroke("white");
    fill("white");
    strokeWeight(1);
    rect(400, 30, 10, 10);
    fill("lightgreen");
  }
  
}

 document.addEventListener('keyup', (event) => {  
 if (event.key === 's'){    
   player1.attack(player2);  
 } else if (event.key === 'ArrowDown'){
 player2.attack(player1);  
  } 
   else if (event.key === 'Enter'){
     Starting = false; }
}) 