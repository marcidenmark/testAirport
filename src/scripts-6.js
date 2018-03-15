

const endpoint = 'https://gist.githubusercontent.com/marcidenmark/b7d5160b19cf97b6d08c64dd68c5cc4c/raw/204fb9fd3f8f03688f9a6313ca53b7ce9956663a/flights.json';
// const departure = document.getElementById("departureCity");
// citties = this creates a promise, but it is "pending" when seen in the console"
const cities =
    fetch(endpoint)
    .then(rawdata => rawdata.json()) //fetch can't handle json.
    .then((data) => {
        console.log(data);
        // console.log(departureCity); //giving in input id html

    });
// console.log(cities);
// console.log(departure);
departureCity.addEventListener("click", (event) => {
    // console.log(event);
    console.log(event.target);
});

let placesAutocomplete = places({
    container: document.querySelector('#address-input')
});
// console.log(placesAutocomplete);
