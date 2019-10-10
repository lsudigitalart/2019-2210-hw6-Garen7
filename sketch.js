var size = 0

function preload(){
  imgBruh = loadImage("assets/bruhMoment.png")
  imgSquat = loadImage("assets/squat.png")
  imgDab = loadImage("assets/dab.png")
  imgSit = loadImage("assets/sit.png")
  imgBow = loadImage("assets/bow.png")
  imgBackground = loadImage("assets/graveyard.jpg")
}

function setup(){
  createCanvas(innerWidth, innerHeight)

  imageMode(CENTER)
  size = min(width, height)
}

function draw(){
  image(imgBackground, width/2, height/2, width, height)
  //out of bounds
  if(mouseX < (width-size/3)/2 || mouseX > (width+size/3)/2 || mouseY < (height-size)/2 || mouseY > (height+size)/2){
    image(imgBruh, width/2, height/2, size, size)
  }
  //top side
  else if(mouseY < height/2){
    if(mouseX > width/2) image(imgSquat, width*.4, height*.6, size*.75, size*.75)
    else image(imgSit, width*.5, height*.6, size*.75, size*.75)
  }
  //bottom side
  else{
    if(mouseX > width/2) image(imgBow, width/2, height/2, size, size)
    else image(imgDab, width/2 - size/4, height/2, size, size)
  }
}

//not seeing use
function crop(image, limits){
  if(!limits) limits = {}
  if(!limits.rMin) limits.rMin = 0
  if(!limits.rMax) limits.rMax = 256
  if(!limits.gMin) limits.gMin = 0
  if(!limits.gMax) limits.gMax = 256
  if(!limits.bMin) limits.bMin = 0
  if(!limits.bMax) limits.bMax = 256
  if(!limits.alpha) limits.alpha = 0
  
  image.loadPixels()

  for(var index = 0; index < image.pixels.length; index += 4){
    //red
    if(image.pixels[index] < limits.rMin || image.pixels[index] > limits.rMax){
      image.pixels[index+3] = limits.alpha
    }
    //green
    else if(image.pixels[index+1] < limits.gMin || image.pixels[index+1] > limits.gMax){
      image.pixels[index+3] = limits.alpha
    }
    //blue
    else if(image.pixels[index+2] < limits.bMin || image.pixels[index+2] > limits.bMax){
      image.pixels[index+3] = limits.alpha
    }
  }

  image.updatePixels()
}
