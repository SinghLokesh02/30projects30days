let button = document.querySelector('button');
let body = document.querySelector('body');

function getRandomColor() {
    let r = Math.round(Math.random() * 256);
    let g = Math.round(Math.random() * 256);
    let b = Math.round(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const id = setInterval(() => {
    body.style.background = getRandomColor();
}, 1000);



button.addEventListener('click', ()=>{
    clearInterval(id);
    button.textContent = body.style.background;
})