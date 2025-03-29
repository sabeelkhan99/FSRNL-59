const h2 = document.querySelector('h2');
const para = document.querySelector('p');
const image = document.querySelector('img');

// h2.classList.add('red');
// para.classList.add('red');


const IMAGE_SOURCE_1 = 'https://images.unsplash.com/photo-1742845918430-c6093f93f740?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D';
const IMAGE_SOURCE_2 = 'https://images.unsplash.com/photo-1742943679519-bb9eb364b152?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D';

let isTrue = true;

function toggleImage() {
    if (isTrue) {
        image.setAttribute('src', IMAGE_SOURCE_1);
    } else {
        image.setAttribute('src', IMAGE_SOURCE_2);
    }
    isTrue = !isTrue;
}

setInterval(toggleImage, 1000);

// Extend the above solution for n images.


