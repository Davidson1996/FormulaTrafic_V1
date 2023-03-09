let lanes = [35, 40, 125, 135, 220, 225, 310, 315];
let reborn = [-1800, -180];
let collide = false;

function setup() {
  createCanvas(400, 800);
}

function draw() {
  background(roadBackground);
  plotObj();
  plotCar();
  carMove();
  speedTrafics();
  traficBorn();
  colisao();
}

function plotObj() {
  for (let i = 0; i < imageObj.length; i++) {
    image(imageObj[i], xCord[i], yCord[i], widthObj[i], heightObj[i]);
  }
}

function plotCar(){
  image(imageCar, dimCar[0], dimCar[1], dimCar[2], dimCar[3]);
}


function colisao() {
  //collideRectRect(x, y, width, height, x2, y2, width2, height2 )
  for (let i = 1; i < imageObj.length; i++) {
    collide = collideRectRect( xCord[i], yCord[i], widthObj[i], heightObj[i], dimCar[0], dimCar[1], dimCar[2], dimCar[3]);
    if (collide) {
      print("SE FUDEU, MORREU OTÁRIO");
    }
  }
}
