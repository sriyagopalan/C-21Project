var wall, thickness;
var bullet, speed, weight;
function setup() {
  createCanvas(800,400);
  thickness=random(22, 83);
  wall=createSprite(700, 200, thickness, height/2);
  wall.shapeColor = "gray";
  speed=random(223, 321);
  weight=random(30, 52);
  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX = speed/10;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(hasCollided(bullet,wall)){
    bullet.velocityx=0;
    var damage=0.5 * weight * speed * speed/(thickness *thickness * thickness);
    if(damage>10){
      wall.shapeColor=color(255, 0, 0);
    }
    if(damage<10){
      wall.shapeColor=color(0, 255, 0);
    }
  }
}
function hasCollided(lbullet, lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}