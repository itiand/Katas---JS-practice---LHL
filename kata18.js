function squareCode(message) {
//PART1
  //remove the space
  let strNoSpace = message.split(' ').join('');
  const numOfChar = strNoSpace.length; //54
  const numOfRows = Math.floor(Math.sqrt(numOfChar)) //7
  const numOfColumns = Math.ceil(Math.sqrt(numOfChar))


  let squareStr = []
  for(let i = 0; i < strNoSpace.length; i += numOfColumns) {
    let eightChunk = strNoSpace.substring(i, i + numOfColumns);
    squareStr.push(eightChunk);
  }

//PART2
  //Traversing the square string
  let traversedLetters = []
  for(let i = 0; i < numOfColumns; i++) {
    let partiallyTraversedLetters = ''
    for(let j = 0; j < squareStr.length; j++) {
      partiallyTraversedLetters += `${squareStr[j].charAt(i)}`
    }
    traversedLetters.push(partiallyTraversedLetters)
  }

  return traversedLetters.join(' ');
  
}

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));