// loading

// nav meanu 
let nav = document.querySelector('#nav');
let hamburger = document.querySelector('#hamburger');
let navItems = document.querySelectorAll('#nav-items > span');

hamburger.addEventListener('click', function () {


    // Only toggle below 1300px
    if (window.innerWidth < 1300) {
        nav.classList.toggle('open');
        navItems.forEach((item) => {
            item.classList.remove('hidden');
            item.classList.add('flex');
        });
    }
});

navItems.forEach(item => {
    item.addEventListener('click', function () {
        if (window.innerWidth < 1300) {
            nav.classList.remove('open');
        }
    });
});

window.addEventListener('resize', function () {
    if (window.innerWidth >= 1300) {
        nav.classList.remove('open');
    }
});