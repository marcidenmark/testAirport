
//back to commit 7afb76f6b2713e0ff33a0f67d9fa6421ce65d197
fetchData(){
		fetch('https://gist.githubusercontent.com/marcidenmark/b7d5160b19cf97b6d08c64dd68c5cc4c/raw/204fb9fd3f8f03688f9a6313ca53b7ce9956663a/flights.json')
		.then(response => response.json())//fetch can't handle json.
		.then(parsedJSON => console.log(parsedJSON.results))
		.catch(error => console.log('parsing failed', error))

	}


	// departureCity.addEventListener("click", (event) => {
	// console.log(event);
	// console.log(event.target);
 //  });
