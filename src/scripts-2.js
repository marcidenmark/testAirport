// document.addEventListener("DOMContentLoaded", () => {
//   console.log("DOM fully loaded and parsed");
//   // Add here your addEventListener code
// });
//
//


const destination = document.getElementById("departureCity");

const callJson = (destination, callback) => {
const url = 'https://gist.githubusercontent.com/marcidenmark/b7d5160b19cf97b6d08c64dd68c5cc4c/raw/204fb9fd3f8f03688f9a6313ca53b7ce9956663a/flights.json';

	fetch(url)
		.then(rawdata => rawdata.json())//fetch can't handle json.
		.then((data) => {
			callback(data);
			// data.results((destination) => {
			// 	const item = `<input> ${flights.destination}</input>`;
			// 	departureCity.insertValue(destination.value);
			});
};
console.log(callJson);

// <input type="search" id="address-input" placeholder="Where are we going?" />
	departureCity.addEventListener("click", (event) => {
	console.log(event);
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

