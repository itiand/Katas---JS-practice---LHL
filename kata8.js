const repeatNumbers = function(data) {
  let numbersRepeated = []

  for(let i = 0; i < data.length; i++) {
    let repeat = '';
    const repeatCount = data[i][1];
    for(let j = 0; j < repeatCount; j++) {
      repeat += data[i][0];
    }
    numbersRepeated.push(repeat);
  }
  
  return numbersRepeated.join(', ') //join method not only combines them, it also converts to string.
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));