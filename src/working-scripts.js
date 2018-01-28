const endpoint = 'https://gist.githubusercontent.com/marcidenmark/b7d5160b19cf97b6d08c64dd68c5cc4c/raw/204fb9fd3f8f03688f9a6313ca53b7ce9956663a/flights.json';

fetch(endpoint)
.then(rawdata => rawdata.json())//fetch can't handle json.
.then(data => {
 	console.log(data);
});
	const departure = document.getElementById("departureCity");
	console.log(departure);

	departure.addEventListener("click", (event) => {
	console.log(event);
	console.log(event.target);
});

//from Jad
const endpoint = 'https://gist.githubusercontent.com/marcidenmark/b7d5160b19cf97b6d08c64dd68c5cc4c/raw/204fb9fd3f8f03688f9a6313ca53b7ce9956663a/flights.json';

fetch(endpoint)
.then(rawdata => rawdata.json())
.then(data => {
    //write your remaining logic here:

});

numbers = [1,3,5,11,22,8]
const evenNumbers = numbers.filter(function(n) {
  return n % 2 === 0; // true if "n" is par, false if "n" isn't
});
console.log(evenNumbers);
