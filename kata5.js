const urlEncode = function(text) {
  //trim all strings in case they have space in the beginning and and end.
  const trimmedText = text.trim();

  //replace regex method
  // let output = trimmedText.replace(/ /g, '%20');

  //Split join method
  let output = trimmedText.split(' ') // this becomes an array. split by space;
  output = output.join('%20'); //now join the array with %20 in between'
  return output
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
