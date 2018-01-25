const character = {
  name: "Luke Skywalker",
  type: "Jedi"
};

Object.keys(character).forEach((key) => {
  const value = character[key];
  console.log(`The character ${key} is ${value}`);
});

const endpoint = 'https://gist.githubusercontent.com/marcidenmark/b7d5160b19cf97b6d08c64dd68c5cc4c/raw/204fb9fd3f8f03688f9a6313ca53b7ce9956663a/flights.json';

const flights = [];
fetch(endpoint)
  .then(rawdata => rawdata.json())
  .then(data => flights.push(...data));

const departure = document.getElementById("departureCity")
departure.addEventListener("click", (event) => {
	console.log(event);
})



//arrow function syntax
//const square = (x) => {
//  return x * x;
//};



//_______________________________________
// document.addEventListener('DOMContentLoaded',function() {
//     document.querySelector('select[name="ice-cream"]').onchange=changeEventHandler;
// },false);

