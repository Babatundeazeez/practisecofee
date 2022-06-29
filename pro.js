let nav = document.querySelector('.nav');

document.querySelector('#menu-btn').onclick = () => {
    nav.classList.toggle('active');

}

let searchForm = document.querySelector('.search-form');
document.querySelector('#search').onclick = () => {
    searchForm.classList.toggle('active');

}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');

}