const url = 'https://gist.githubusercontent.com/marcidenmark/b7d5160b19cf97b6d08c64dd68c5cc4c/raw/fbb0ed9382fb7238733db1ee38563ef4a8563014/flights.json';

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

fetch(url)
    .then(response => response.json()) //fetch can't handle json.
    .then((data) => {
        let cities = data.results;
        return cities.map(function(cities) {
        	let ul = createNode('ul');
        	append(ul, ul);
        })
    })
