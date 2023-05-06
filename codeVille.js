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

///  BINS
const bins = {
  waste: 0,
  recycling: 0,
  compost: 0
}

const smartGarbage = function(trash, bins) {
  bins[trash] += 1;
  return bins;
}

console.log(smartGarbage('waste', bins))



/// carPassing////////
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

function carPassing(cars, speed) {
  const car = {
    time: Date.now(),
    speed: speed,
  }
  cars.push(car);

  return cars;
}

console.log(carPassing(cars, speed));




//function judgeVegetable//////////
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

function judgeVegetable(arrOb, metric) {
  // const winner = ''
  //go through the array
    //check what metric is being judged
      //vegetable[metric]

    //if winner = {} then winner = vegetable
      //if vegetable[metric] > winner --> winner = vegetable metric      
  //return winner.submitter


  let winner = {};
  arrOb.forEach(vegetable => {
    if(Object.keys(winner).length === 0) {
      winner = vegetable;
      return
    } else if (vegetable[metric] > winner[metric]) {
      winner = vegetable
    }
  });
  return winner.submitter
}

console.log(judgeVegetable(vegetables, metric));
