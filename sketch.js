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
      continue
    }
    //green
    else if(image.pixels[index+1] < limits.gMin || image.pixels[index+1] > limits.gMax){
      image.pixels[index+3] = limits.alpha
      continue
    }
    //blue
    else if(image.pixels[index+2] < limits.bMin || image.pixels[index+2] > limits.bMax){
      image.pixels[index+3] = limits.alpha
      continue
    }
  }

  image.updatePixels()
}
