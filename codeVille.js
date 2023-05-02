//station - name, capacity, venue type
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


function chooseStations(array) {
  let goodStations = [] // for the stations that meet the requirement

  //go through the sations. 
  for(let i = 0; i < array.length; i ++) {

    // at least 20 capacity, school, or community centre.
    if(array[i][1] >= 20 && (array[i][2] === 'school' || array[i][2] === 'community centre')) {
      goodStations.push(array[i][0])
    }
  }

  return goodStations;
  
}




//////CodeVille part 2////////
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

function finalPosition(moves) {
  let position = [0,0];
  for(let steps of moves) { //go through each array item
    if(steps === 'north') {  //if north, +1 y position
      position[1] += 1;
    } else if (steps === 'south') { ////south -1 y position
      position[1] -= 1;
    } else if (steps === 'east') { ///    //east +1 x position
      position[0] += 1;
    } else if (steps === 'west') {
      position[0] -= 1;
    } else {
      return;
    }
  }
  return position;

}

console.log(finalPosition(moves));