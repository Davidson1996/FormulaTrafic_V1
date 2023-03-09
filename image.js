let roadBackground;
let imageCar;
let imageTrafic;
let imageBus;
let imageTrafic1;
let widthObj= [ 40, 60, 40, 40, 40];
let heightObj= [ 80, 160, 80, 80, 80];
let dimCar = [180, 650, 60, 125]

// Cordenada X Veiculos [Car, Trafic, Bus] [0,1,2]
let xCord= [180, 40, 225, 40, 180, 40, 225,40];
// Cordenada Y Veiculos [Car, Trafic, Bus] [0,1,2]
let yCord= [650, -200, -80, 40, -200, -80,40];

function preload (){
  roadBackground = loadImage("images/road.png");
  imageCar = loadImage("images/f1.png");
  imageTrafic = loadImage("images/car0.png");
  imageBus = loadImage("images/Bus.png");
  imageTrafic1 = loadImage("images/car1.png");
  imageObj = [ imageTrafic, imageBus, imageTrafic1,imageTrafic, imageTrafic1]
}
