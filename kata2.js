const conditionalSum = function(values, condition) {

  let OddNums = 0;
  let EvenNums = 0; 
  const EvenOdd = condition;

  //loop through the array
    //test for even numbers % 2 == 0
      //EvenNums += item[i]
    //else odd 
      //OddNums += item[i]
  
  for(let i = 0; i < values.length; i++) {
    if(values[i] % 2 == 0) {
      EvenNums += values[i];
    } else {
      OddNums += values[i]
    }
  }

  if (EvenOdd === 'even') {
    return EvenNums
  } else if (EvenOdd === 'odd') {
    return OddNums
  } else {
    return 'Please either pick a condition of even or odd.'
  }
}


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));