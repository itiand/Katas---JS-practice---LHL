const instructorWithLongestName = function(instructors) {
  let longest;

  //go through the array
    //if longest = undefined --> item[i] = longest
    //else if item[i].name.length > longest.name.length {}
        // longest = item[i]
    // else console.log(item[i] is shorter than the current longest)

  for(let i = 0; i < instructors.length; i++) {
    if(longest === undefined) longest = instructors[i]
    else if(instructors[i].name.length > longest.name.length) {
      longest = instructors[i];
    } else {
      console.log(`${instructors[i].name} is not longer than ${longest.name}.`)
    }
  }
  return longest;

}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
