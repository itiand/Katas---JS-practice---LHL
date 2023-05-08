function whereCanIPark(spots, vehicle) {
  let output = [];
  let potentialParking = [];

  
  if(vehicle === 'motorcycle') {
    potentialParking = ['R', 'S', 'M'];
  } else if (vehicle === 'small') {
    potentialParking = ['R', 'S'];
  } else {
    potentialParking = ['R']
  }

  //go through array, for loop
    //go through array of each item - for loop
      //if potentialParking includes item[i] return i and j, break
  
  for(let i = 0; i < spots.length; i++) {
    for(let j = 0; j < spots[i].length; j++) {
      if (potentialParking.includes(spots[i][j])) {
        output.push(j);
        output.push(i);
        return output;
        // output.push[i]
        // output.push[j]

      }
    }
  }

  //if no spot found
  return false
}

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));


console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))