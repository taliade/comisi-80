const apiUrl = 'https://rickandmortyapi.com/api/character/';

const container = document.getElementById('container');

async function getCharacters() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const characters = data.results;
        characters.forEach(character => {
            const article = document.createElement('article');
            article.setAttribute('class','character');
            article.innerHTML = `
                <img src="${character.image}" alt="">
                <h2>${character.name}</h2>
                <p class="data"><span>Status:</span> <span class="status ${character.status.toLowerCase()}">${character.status}</span></p>
                <p class="data"><span>Species:</span> ${character.species}</p>
                <p class="data"><span>Type:</span> ${character.type}</p>
                <p class="data"><span>Gender:</span> ${character.gender}</p>
            `;
            container.appendChild(article);
        });
    } catch (error) {
        console.log(error);
    }
}

getCharacters();
