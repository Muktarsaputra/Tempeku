// toggle class active
const navbarNav = document.querySelector
('.navbar-nav');
// ketika humberger menu diklik
document.querySelector('#humberger-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};
// toggle clas ctive untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = () => {
    searchForm.classList.toggle('active');
    searchBox.focus();
};
// toggle clas untuk shopiing cart
const shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#shop-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.prevenDefault();
}

// ketika dikilik sidebar hiilang,tetapi tidak idak di di hamberger menu melaikan d semabarang temapat atau di luar hambergerm enu
const hbm = document.querySelector
('#humberger-menu');
const sb = document.querySelector
('#search-button');
const shpcart = document.querySelector
('#shop-button');



document.addEventListener('click', function (e) {
    if (!hbm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if (!shpcart.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});


// // modal box
// const itemDetailModal = document.querySelector('#item-detail-modal');
// const itemDetailButton = document.querySelector('.item-detail-button');

// itemDetailButton.onclick = (e) =>  {
//     itemDetailModal.style.display = 'flex';
//     e.prevenDefault();
// };


// by wpu
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};