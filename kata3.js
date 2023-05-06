const numberOfVowels = function(data) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let numOfVowels = 0;

  //take the word, to small case, then convert the letters into an array.
  let wordArray = data.toLowerCase().split('')

  //loop through the array
  for(let i = 0; i < wordArray.length; i++) {
    //if that element includes in that array,
    if(vowels.includes(wordArray[i])) {
      numOfVowels += 1;
    }
  }
  return numOfVowels;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));