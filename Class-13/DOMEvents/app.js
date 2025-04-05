const btn = document.querySelector('button');
const articles = document.querySelectorAll('section article');
const h1 = document.querySelector('h1');
const input = document.querySelector('input[type="text"]');
const form = document.querySelector('form');

function scream() {
    console.log('Screaming....');
}

function shout() {
    console.log('Shouting.....');
}


// btn.onclick = scream;
// btn.onclick = shout;

function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


function colorize() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// rgb(r, g, b)

btn.addEventListener('click', scream);
btn.addEventListener('click', shout);
btn.addEventListener('click', colorize);

for (let article of articles) {
    article.addEventListener('click', colorize)
}

h1.addEventListener('click', colorize);


// Mouse events
h1.addEventListener('mouseenter', () => {
    h1.style.border = '2px solid black';
});


h1.addEventListener('mouseleave', () => {
    h1.style.border = null;
});


// Keyboards Events
input.addEventListener('keyup', (event) => {
    // console.log(event);
    if (event.which === 13) {
        console.log(input.value);
    }
    
});

// Form Events
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = form.elements[0].value;
    const password = form.elements[1].value;
    console.log(username);
    console.log(password);
});