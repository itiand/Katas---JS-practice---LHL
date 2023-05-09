const PI = 3.14159;

//subfunc 1
const sphereVolume = function (radius) {
  return (4/3)*PI*radius*radius*radius
}
//subfunc 2
const coneVolume = function (radius, height) {
  return (1/3)*PI*radius*radius*height;
}
//subfunc 3
const prismVolume = function (height, width, depth) {
  return height*width*depth;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189); //TESTING
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49); //TESTING
console.log(prismVolume(3, 4, 5) === 60); //TESTING


//main func
const totalVolume = function (solids) {
  let totalV = 0;
  solids.forEach(solid => {
    if(solid.type === 'sphere') totalV += sphereVolume(solid.radius);
    if(solid.type === 'cone') totalV += coneVolume(solid.radius, solid.height)
    if(solid.type === 'prism') totalV += prismVolume(solid.height, solid.width, solid.depth);
  });
  return totalV;
}


const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
