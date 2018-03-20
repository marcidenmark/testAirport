
  // function createNode(element) {
  //     return document.createElement(element);
  // }

  // function append(parent, el) {
  //   return parent.appendChild(el);
  // }

  // const ul = document.getElementById('departureCity');
  // const url = 'https://gist.githubusercontent.com/marcidenmark/b7d5160b19cf97b6d08c64dd68c5cc4c/raw/204fb9fd3f8f03688f9a6313ca53b7ce9956663a/flights.json';
  // fetch(url)
  // .then((resp) => resp.json())
  // .then(function(data) {
  //   let departureCity = data.results;
  //   return departureCity.map(function(Destination) {
  //     let li = createNode('li'),
  //         span = createNode('span');
  //     span.innerHTML = `${Destination.name.first} ${Destination.name.last}`;
  //     append(li, span);
  //     append(ul, li);
  //   })
  // })
  // .catch(function(error) {
  //   console.log(JSON.stringify(error));
  // });

// _________________________________________
const cities = document.getElementById('cities');
const endpoint = 'https://gist.githubusercontent.com/marcidenmark/b7d5160b19cf97b6d08c64dd68c5cc4c/raw/204fb9fd3f8f03688f9a6313ca53b7ce9956663a/flights.json';
// const departure = document.getElementById("departureCity");
// citties = this creates a promise, but it is "pending" when seen in the console"
    fetch(endpoint)
    .then(rawdata => rawdata.json()) //fetch can't handle json.
    .then((data) => {
    	let cities = data.results;
        // console.log(data);
        console.log(cities); //giving in input id html
    });
 //console.log(cities);
// console.log(departure);
cities.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.target);
});
