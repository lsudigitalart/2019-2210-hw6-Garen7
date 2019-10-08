function crop(image, rMin = 0, rMax = 256, gMin = 0, gMax = 256, bMin = 0, bMax = 256, alpha = 0){
  image.loadPixels()

  for(var index = 0; index < image.pixels.length; index += 4){
    //red
    if(image.pixels[index] < rMin || image.pixels[index] > rMax){
      image.pixels[index+3] = alpha
      continue
    }
    //green
    else if(image.pixels[index+1] < gMin || image.pixels[index+1] > gMax){
      image.pixels[index+3] = alpha
      continue
    }
    //blue
    else if(image.pixels[index+2] < bMin || image.pixels[index+2] > bMax){
      image.pixels[index+3] = alpha
      continue
    }
  }

  image.updatePixels()
}
