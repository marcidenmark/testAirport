// const destination = documegnt.getElementById('destination');

const url = 'https://gist.githubusercontent.com/marcidenmark/b7d5160b19cf97b6d08c64dd68c5cc4c/raw/204fb9fd3f8f03688f9a6313ca53b7ce9956663a/flights.json';
// const url = 'https://gist.githubusercontent.com/marcidenmark/b7d5160b19cf97b6d08c64dd68c5cc4c/raw/fbb0ed9382fb7238733db1ee38563ef4a8563014/flights.json';

const departure = document.getElementById("cities");
// citties = this creates a promise, but it is "pending" when seen in the console"
fetch(url)
    .then(response => response.json()) //fetch can't handle json.
    .then((data) => {
        let destination = data.results;
        console.log(data);
        // console.log(destination); //giving nothing
    });


//click event
destination.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.target);
});

