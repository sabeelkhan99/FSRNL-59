const form = document.querySelector('form');
const displaySection = document.getElementById('list');

const SERVER_BASE_URL = "https://api.tvmaze.com";

async function fetchShows(showName){
    const res = await fetch(`${SERVER_BASE_URL}/search/shows?q=${showName}`);
    const data = await res.json();
    return data;
}

async function fetchAndDisplayResult(searchText) {
    while (displaySection.firstChild) {
        displaySection.firstChild.remove();
    }
    const shows = await fetchShows(searchText);
    for (const item of shows) {
        const image = document.createElement('img');
        if (!item.show.image) {
            continue
        }
        image.classList.add('m-2');
        image.setAttribute('src', item.show.image.medium);
        image.setAttribute('width', '200px');
        displaySection.append(image);
    }
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchText = form.elements[0].value;
    fetchAndDisplayResult(searchText);
})