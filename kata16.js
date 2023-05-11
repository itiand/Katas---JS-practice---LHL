const makeCase = function(input, textCase) {
  let caseFormatted = ''
  let caseArr = [];
  if (typeof textCase == 'string') {
    caseArr.push(textCase);
  } else if (Array.isArray(textCase)) {
    caseArr = textCase;
  }
  

  //split the string by space
  const arrayedInputs = input.split(' ');

  //what kind of case is requested?
  for(const format of caseArr) {
    
    if(format === "camel") {
      for(let i = 0; i < arrayedInputs.length; i++){
        if(i !== 0) {
          arrayedInputs[i] = arrayedInputs[i].charAt(0).toUpperCase() + arrayedInputs[i].slice(1);
        }
      }
    }

    if(format === "pascal") {
      for(let i = 0; i < arrayedInputs.length; i++) {
        arrayedInputs[i] = arrayedInputs[i].charAt(0).toUpperCase() + arrayedInputs[i].slice(1);
      }
    }

    if(format === "title") {
      for(let i = 0; i < arrayedInputs.length; i++) {
        arrayedInputs[i] = arrayedInputs[i].charAt(0).toUpperCase() + arrayedInputs[i].slice(1);
      }
    }

    if(format === "vowel") {
      const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
      for (let i = 0; i < arrayedInputs.length; i++) {
        let word = arrayedInputs[i];
        let wordArr = word.split('');
        for (let j = 0; j < wordArr.length; j++) {
          if (vowels.includes(wordArr[j])) {
            wordArr[j] = wordArr[j].toUpperCase();
          }
        }
        arrayedInputs[i] = wordArr.join('');
      }
    } 

    if(format === "consonant") {
      for (let i = 0; i < arrayedInputs.length; i++) {
        let word = arrayedInputs[i];
        let wordArr = word.split('');
        for (let j = 0; j < wordArr.length; j++) {
          if(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/.test(wordArr[j])) {
            wordArr[j] = wordArr[j].toUpperCase();
          }
        }
        arrayedInputs[i] = wordArr.join('');
      }
    }

    if(format === 'upper') {
      for(let i = 0; i < arrayedInputs.length; i++) {
        arrayedInputs[i] = arrayedInputs[i].toUpperCase();
      }
    }

    //JOIN arrayedInputs
    if(format === "snake") caseFormatted = arrayedInputs.join('_')
    else if (format === "kebab") caseFormatted = arrayedInputs.join('-');
    else if (format === "camel" || format === "pascal") caseFormatted = arrayedInputs.join('');
    else caseFormatted = arrayedInputs.join(' ')

  }
  console.log(textCase)
  return caseFormatted;
}


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"))
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["vowel", "kebab"]));

// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// THIS_IS_A_STRING