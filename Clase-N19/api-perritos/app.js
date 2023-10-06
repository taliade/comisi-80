
const URL = 'https://dog.ceo/api/breeds/image/random';

fetch(URL)
.then(response => response.json){
    const image = response.json
}