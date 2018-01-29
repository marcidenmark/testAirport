var pry_js = require('pryjs');
var isomorphic_fetch = require('isomorphic-fetch');

const endpoint = 'https://gist.githubusercontent.com/marcidenmark/b7d5160b19cf97b6d08c64dd68c5cc4c/raw/204fb9fd3f8f03688f9a6313ca53b7ce9956663a/flights.json';

fetch(endpoint)
.then(rawdata => rawdata.json())
.then(data => {
    eval(pry_js.it)
});
x
