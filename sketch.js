var database,gameState=0;
var form,game,player;
var playerCount;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game=new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount===4){
    game.update(0);
  }
  if(gameState===1){
    clear();
    game.play();
  }

  textSize(30);
  fill(0);
  text("Write your G-mail id and password",20,80);
 
}
  