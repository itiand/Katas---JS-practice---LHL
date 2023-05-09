function camelCase(str) {
  let strArray = str.split(' ');
  let camelCase = "";

  //loop through the array
    //if i = 0, meaning if it's the first word, make the whole word lower case
      // camelCast += item[i].toLowerCase()
    //else if it's subsequent words
      //take the first letter.
      //cameCase += item[i].chartAt(0).toUpperCase() + item.slice(1).toLowerCase()

  for(let i = 0; i < strArray.length; i++) {
    if(i === 0) {
      camelCase += strArray[i].toLowerCase();
    } else {
      camelCase += strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
    }
  }
  return camelCase;
}


console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));