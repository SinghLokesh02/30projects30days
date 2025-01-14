let close = document.querySelector('.close');
let modal = document.querySelector('.modal');
let open = document.querySelector('button');

open.addEventListener('click', () => {
    modal.style.display = 'block';
});
close.addEventListener('click', () => {
    modal.style.display = 'none';
});