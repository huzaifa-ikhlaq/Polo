// loading


// custom cursor 
let customCursor = document.querySelector('.custom-cursor')

document.addEventListener('mousemove', function (e) {
    customCursor.style.transform = `translate(${e.clientX}px,${e.clientY}px)`
})

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

// arow jump animation 

let arowContainer = document.querySelector('.arow-container')
let arowsvg = document.querySelector('.arow-svg')

arowContainer.addEventListener('mouseenter', () => {
    arowsvg.classList.remove('upjump', 'downjump')
    void arowsvg.offsetWidth;
    arowsvg.classList.add('upjump')
})
arowContainer.addEventListener('mouseleave', () => {
    arowsvg.classList.remove('upjump', 'downjump')
    void arowsvg.offsetWidth;
    arowsvg.classList.add('downjump')
})