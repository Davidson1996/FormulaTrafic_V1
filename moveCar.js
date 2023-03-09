function carMove() {
  if (keyIsDown (LEFT_ARROW))  {
  dimCar[0] -= 5
  }
  if (keyIsDown (RIGHT_ARROW)){
    dimCar[0] += 5
  }
}