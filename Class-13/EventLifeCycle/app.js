const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

grandparent.addEventListener('click', () => {
    console.log('grandparent');
}, true);

parent.addEventListener('click', () => {
    console.log('parent');
}, false);

child.addEventListener('click', () => {
    console.log('child');
}, true);



// grandparent
// child
// parent