const checkAir = function (samples, threshold) {

  let sumOfDirty = 0;
  samples.forEach(sample => { //loop through the array
    if(sample === 'dirty') { //if dirty
      sumOfDirty += 1;
    }
  });

  let dirtyP = sumOfDirty / samples.length

  if(dirtyP > threshold){
    return 'Polluted'
  } else {
    return 'Clean'
  }
}

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
