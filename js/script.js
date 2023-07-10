// toggle class active
const navbarNav = document.querySelector
('.navbar-nav');
// ketika humberger menu diklik
document.querySelector('#humberger-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};


// ketika dikilik sidebar hiilang tapi tidak idak di di hamberger menu melaikan d semabarang temapat atau di luar hambergerm enu
const humberger = document.querySelector
('#humberger-menu');

document.addEventListener('click', function (e) {
    if (!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});