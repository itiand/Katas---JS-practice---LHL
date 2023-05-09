//Merge Arrays Practice

//first practice - just combine two arrays

function combine(arr1, arr2) {
  return arr1.concat(arr2);
}

///version with sorting
function merge(arr1, arr2) {
  let combinedUnsorted = arr1.concat(arr2);
  return combinedUnsorted.sort()

}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4, 99 ]));