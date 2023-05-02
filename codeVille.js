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


chooseStations(stations);