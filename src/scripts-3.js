
//back to commit 7afb76f6b2713e0ff33a0f67d9fa6421ce65d197
const endpoint = 'https://gist.githubusercontent.com/marcidenmark/b7d5160b19cf97b6d08c64dd68c5cc4c/raw/204fb9fd3f8f03688f9a6313ca53b7ce9956663a/flights.json';
	const cities =
	fetch(endpoint)
		.then(rawdata => rawdata.json())//fetch can't handle json.
		.then((data) => {
 			console.log(data); //this is giving the array of objects
 			console.log(departureCity);//giving in input id html

  	});
		console.log(cities);

	departureCity.addEventListener("click", (event) => {
	console.log(event);
	console.log(event.target);
  });
