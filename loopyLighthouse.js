// 100 to 200

// if  multiple of 3 and 4
// else if multiple of 3
// else if multiple of 4
// else just print the number

function loopyLighthouse(range, muiltiples, words) {
  for(let x = range[0]; x <= range[1]; x++) {
    if(x % muiltiples[0] == 0 && x % muiltiples[1] == 0) {
      console.log(`${words[0]}${words[1]}`);
    } else if (x % muiltiples[0] == 0) {
      console.log(`${words[0]}`);
    } else if (x % muiltiples[1] == 0) {
      console.log(`${words[1]}`)
    } else {
      console.log(x)
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
