const multiplicationTable = function(maxValue) {
  let output = ''
  for(let i = 1; i <= maxValue; i++) {
    for(let j = i; j <= maxValue * i; j+= i) {
      if(j=== maxValue*i) {
        output += `${j}`
      } else {
        output += `${j} `
      }
    }
    output += `\n`
  }
  return output;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));

