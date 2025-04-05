const btn = document.querySelector('button');

function scream() {
    console.log('Screaming....');
}

function shout() {
    console.log('Shouting.....');
}


// btn.onclick = scream;
// btn.onclick = shout;

btn.addEventListener('click', scream);
btn.addEventListener('click', shout);