// loading


// custom cursor 
let customCursor = document.querySelector('.custom-cursor')
let innerCursor = document.querySelector('.inner-cursor')

document.addEventListener('mousemove', function (e) {
    customCursor.style.transform = `translate(${e.clientX}px,${e.clientY}px)`
})
//  banner img custom cursor 

let bannerImg = document.querySelectorAll('.banner-img')

bannerImg.forEach(img => {

    img.addEventListener('mouseenter', () => {
        customCursor.classList.remove('shadow-[0_0_30px_5px_rgba(255,255,0,0.2)]', '-left-[4.5px]', 'bg-white')
        customCursor.classList.add('-translate-x-1/2', 'border', 'border-white', 'h-11', 'w-32.5', 'blur-[1px]')
    })
    img.addEventListener('mouseleave', () => {
        customCursor.classList.add('shadow-[0_0_30px_5px_rgba(255,255,0,0.2)]', '-left-[4.5px]', 'bg-white')
        customCursor.classList.remove('-translate-x-1/2', 'border', 'border-white', 'h-11', 'w-32.5', 'blur-[1px]')
    })

});

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

let arowContainer = document.querySelectorAll('.arow-container')

arowContainer.forEach(container => {
    let arowsvg = container.querySelector('.arow-svg')

    container.addEventListener('mouseenter', () => {
        arowsvg.classList.remove('upjump', 'downjump')
        void arowsvg.offsetWidth;
        arowsvg.classList.add('upjump')
    })
    container.addEventListener('mouseleave', () => {
        arowsvg.classList.remove('upjump', 'downjump')
        void arowsvg.offsetWidth;
        arowsvg.classList.add('downjump')
    })
});

