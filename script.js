var player1;
var player2;

var bgImg;

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
  }

  draw() {
    fill("white");

    rect(this.x, this.y, this.width, this.height); 
  }

  moveLeft() {    
    this.x -= 5;

  }
  moveRight() {    
    this.x += 5; 

  }

  attack(opponent) {    
    if (this.x + this.width >= opponent.x && this.x <= opponent.x + opponent.width) {      
  opponent.health -= 10;   
    }  
   }

}

function startGame() { 
  console.log("Starting the game...");
}
function options() {  
  console.log("Opening options menu...");
}
function exit() {  
  console.log("Exiting the game...");
}

function draw() {   
  background(bgImg);    

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
  rect(10, 20, 100, 20);
  fill("lightblue");
  rect(10, 20, player1.health, 20);

  stroke("black");
  fill("black");
  strokeWeight(1);
  rect(680, 20, 100, 20);
  fill("lightblue");
  rect(680, 20, player2.health, 20);

}

// document.addEventListener('keyup', (event) => {  
// if (event.key === 's') {    
//   player1.attack(player2);  
// } else if (event.key === 'ArrowDown') {    
// player2.attack(player1);  
//  }
// });