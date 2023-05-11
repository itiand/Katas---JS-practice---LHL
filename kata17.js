const urlDecode = function(text) {
  let convertedToObject = {};

  const filtered20 = text.replace(/%20/g, ' '); // filter for %20
  const filteredAnd = filtered20.split('&');  // filter for &
  
  //filter for =  ---- then assign to convertedToObject
  for(i = 0; i < filteredAnd.length; i++) {
    let filteredEqual = filteredAnd[i].split('=') // [ 'city', 'Vancouver' ] & [ 'weather', 'lots of rain' ]

    convertedToObject[filteredEqual[0]] = filteredEqual[1];
  }
  return convertedToObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
