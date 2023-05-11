const organizeInstructors = function(instructors) {
  const organizedInstructors = {};

  for(const instructor of instructors) {
    if(organizedInstructors[instructor.course]) {
      organizedInstructors[instructor.course].push(instructor.name)
    } else {
      organizedInstructors[instructor.course] = [];
      organizedInstructors[instructor.course].push(instructor.name)
    }
  }
  return organizedInstructors
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));


// {
//   iOS: ["Samuel"],
//   Web: ["Victoria", "Karim", "Donald"]
// }
// {
//   Blockchain: ["Brendan"],
//   Web: ["David", "Carlos"],
//   iOS: ["Martha"]
// }