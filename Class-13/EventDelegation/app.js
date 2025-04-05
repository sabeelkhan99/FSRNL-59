const figures = document.querySelectorAll('figure');
const section = document.querySelector('section');


// for (const fig of figures) {
//     fig.addEventListener('click', () => {
//         console.log(fig.innerText);
//     })
// }


// Event Delegation
section.addEventListener('click', (event) => {
    if (event.target.nodeName !== 'FIGURE') {
        return;
    }
    console.log(event.target.innerText);
})