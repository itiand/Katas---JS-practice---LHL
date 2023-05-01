// 100 to 200

// if  multiple of 3 and 4
// else if multiple of 3
// else if multiple of 4
// else just print the number

for(let x = 100; x <=200; x++) {
  if(x % 3 == 0 && x % 4 == 0) {
    console.log(`LoopyLighthouse`);
  } else if (x % 3 == 0) {
    console.log(`Loopy`);
  } else if (x % 4 == 0) {
    console.log(`Lighthouse`)
  } else {
    console.log(x)
  }
}