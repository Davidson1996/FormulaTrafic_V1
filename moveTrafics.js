
function traficBorn(){
  for (let i=0; i<imageObj.length; i++){
  if (yCord[i] >= 800){
    yCord[i] = random(reborn)
    xCord[i] = random(lanes)
    }
  }
}
  
  
function speedTrafics(){
  for (let i= 0; i<imageObj.length; i++){
  if (xCord[i] <= 100){
     yCord[i] +=7
  }
    if (xCord[i] > 100 && xCord[i] <200){
     yCord[i] +=7
  }
    if (xCord[i] > 200 && xCord[i] <300){
     yCord[i] +=8
  }
    if (xCord[i] > 300){
     yCord[i] +=9
  }
  }

  if(keyIsDown (UP_ARROW)){
    for (let i= 0; i<imageObj.length; i++){
    yCord[i] +=5}
  }
}