// document.addEventListener("DOMContentLoaded", () => {
//   console.log("DOM fully loaded and parsed");
//   // Add here your addEventListener code
// });

const endpoint = 'https://gist.githubusercontent.com/marcidenmark/b7d5160b19cf97b6d08c64dd68c5cc4c/raw/204fb9fd3f8f03688f9a6313ca53b7ce9956663a/flights.json';
// const departure = document.getElementById("departureCity");
// citties = this creates a promise, but it is "pending" when seen in the console"
	const cities =
	fetch(endpoint)
		.then(rawdata => rawdata.json())//fetch can't handle json.
		.then((data) => {
			// departureCity.innerHTML = ""; not giving anything.
 			console.log(data); //this is giving the array of objects
 			console.log(departureCity);//giving in input id html

  	});
		console.log(cities);
	// console.log(departure);
// <input type="search" id="address-input" placeholder="Where are we going?" />
	departureCity.addEventListener("click", (event) => {
	// console.log(event);
	console.log(event.target);
  });

 	let placesAutocomplete = places({
    	container: document.querySelector('#address-input')
  });
	// console.log(placesAutocomplete);





// const button = document.getElementByClassName("mdc-button");
// console.log(button);

// 	button.addEventListener("click", (event) => {
// 		console.log(event);
// 		console.log(event.target);
// 	});



// let desitinations = [];
// let desitinations = document.querySelector("departureCity")
// const departureCity = document.getElementById("flights");

// fetch(endpoint)
// .then(rawdata => rawdata.json())//fetch can't handle json.
// .then(data => {
//  	console.log(data);  //write your remaining logic here:
//  	//in html
//  	//<ul id="people"></ul>
//   	data.results.forEach((flight) => {
//   		const flight = `<input>${flight.destination}<input>`
//   });
// 		console.log(departureCity);
// 		console.log(flight);
// });

// const character = {
//   name: "Luke Skywalker",
//   type: "Jedi"
// };

// Object.keys(character).forEach((key) => {
//   const value = character[key];
//   console.log(`The character ${key} is ${value}`);
// });
