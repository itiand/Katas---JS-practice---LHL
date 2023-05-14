const blocksAway = function(directions) {
  const currentPos = [0,0]
  let currentDirection;

  for(let i = 0; i < directions.length; i += 2) {
    const direction = directions[i]
    const blocks = directions[i + 1]

    if(direction === 'right') {
      if(currentDirection === 'north' || (currentDirection === undefined && i === 0)) {
        currentPos[0] += blocks;
        currentDirection = 'east'
      } else if (currentDirection === 'east') {
        currentPos[1] -= blocks;
        currentDirection = 'south'
      } else if (currentDirection === 'south') {
        currentPos[0] -= blocks;
        currentDirection = 'west'
      } else if (currentDirection === 'west') {
        currentPos[1] += blocks;
        currentDirection = 'north' 
      }
    } else if (direction === 'left') {
      if(currentDirection === undefined) {
        currentPos[1] += blocks;
        currentDirection = 'north'
      } else if(currentDirection === 'north') {
        currentPos[0] -= blocks;
        currentDirection = 'west'
      } else if (currentDirection === 'east') {
        currentPos[1] += blocks;
        currentDirection = 'north'
      } else if (currentDirection === 'south') {
        currentPos[0] += blocks;
        currentDirection = 'east'
      } else if (currentDirection === 'west') {
        currentPos[1] -= blocks;
        currentDirection = 'south' 
      }
    }
  }
  return { east: currentPos[0], north: currentPos[1] }
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

//{east: 1, north: 3}
//{east: 3, north: 3}
//{east: 0, north: 0}
