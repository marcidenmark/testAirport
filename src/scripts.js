





//_______________________________________________
const endpoint = 'https://gist.githubusercontent.com/marcidenmark/b7d5160b19cf97b6d08c64dd68c5cc4c/raw/204fb9fd3f8f03688f9a6313ca53b7ce9956663a/flights.json';

const flights = [];
fetch(endpoint)
  .then(rawdata => rawdata.json())
  .then(data => flights.push(...data));

const suggestions = document.querySelector('.destination-input');


function findMatches(wordToMatch, flights) {
  return flights.filter((destination) => {
    const regex = new RegExp(wordToMatch, 'gi');
    return destination.city.match(regex);
  });
}
// <ul class="destination-input">

function displayMatches() {
  const matchArray = findMatches(this.value, flights);
  console.log(this.value, flights);
  const html = matchArray.map((destination) => {
    return;
    `<ul>
		<span class="departureCity">${flightDestination}</span>
	</ul>`;
  }).join('');
}


suggestions = document.getElementById('html').innerHTML;


searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
