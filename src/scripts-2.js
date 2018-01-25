const endpoint = 'https://gist.githubusercontent.com/marcidenmark/b7d5160b19cf97b6d08c64dd68c5cc4c/raw/204fb9fd3f8f03688f9a6313ca53b7ce9956663a/flights.json';

fetch(endpoint)
.then(rawdata => rawdata.json())
.then(data => {
    //write your remaining logic here:

});




const departure = document.getElementById("#departureCity")
departure.addEventListener("click", (event) => {
	console.log(event);
	console.log(event.target);
});

//sudo code:
function fetchTheJson (){
//when user presses button, the fetch happens.

}

function returnTheFlightInfo () {
//the json key relating to the city searched will be loaded.
};


let flights = [];
let flights = document.querySelector("departureCity")


//Then I need after the search is








const character = {
  name: "Luke Skywalker",
  type: "Jedi"
};

Object.keys(character).forEach((key) => {
  const value = character[key];
  console.log(`The character ${key} is ${value}`);
});
