const array = [1,2,3];

const sumLargestNumbers = function(data) {
  //const highest
  //const high
  //go through the array
    //if highest empty --> item[i] = highest 
    // else if item[i] > highest --> item[i] = highest
    //else if item[i] > higher || undefined --> item[i] = high
    //else return
  //return high + highest

  let highest;
  let high;

  for(let i = 0; i < data.length; i ++) {
    if(highest == undefined) {
      highest = data[i];
      // console.log('case1',i, highest, high)
    } else if (data[i] > highest) {
      high = highest;
      highest = data[i]
      // console.log('case2',i, highest, high)
    } else if (data[i] > high || high === undefined){
      high = data[i]
      // console.log('case3',i, highest, high)
    }
  }
  return high + highest;
}

console.log(sumLargestNumbers(array));