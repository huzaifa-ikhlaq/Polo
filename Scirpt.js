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
        customCursor.classList.add('-translate-x-1/2', 'border', 'border-white', 'h-11', 'w-32.5')
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

// shooting stars animation 

// shooting star animation 1

let star1 = document.querySelector('.shooting-star-1')

function starAnimation1() {
    star1.classList.add('shooting-star-1')

    setTimeout(() => {
        star1.classList.remove('shooting-star-1')
        setTimeout(() => {
            starAnimation1()
        }, 7000)
    }, 3000)
}

starAnimation1()


// shooting star animation 2

let star2 = document.querySelector('.shooting-star-2')

function starAnimation2() {
    star2.classList.add('shooting-star-2')

    setTimeout(() => {
        star2.classList.remove('shooting-star-2')
        setTimeout(() => {
            starAnimation2()
        }, 4000)
    }, 3500)
}

starAnimation2()

// shooting star animation 3

let star3 = document.querySelector('.shooting-star-3')

function starAnimation3() {
    star3.classList.add('shooting-star-3')

    setTimeout(() => {
        star3.classList.remove('shooting-star-3')
        setTimeout(() => {
            starAnimation3()
        }, 7000)
    }, 3500)
}

starAnimation3()

// shooting star animation 4

let star4 = document.querySelector('.shooting-star-4')

function starAnimation4() {
    star4.classList.add('shooting-star-4')
    setTimeout(() => {
        star4.classList.remove('shooting-star-4')
        setTimeout(() => {
            starAnimation4()
        }, 11000)
    }, 5000)
}

starAnimation4()

// shooting star animation 5

let star5 = document.querySelector('.shooting-star-5')

function starAnimation5() {
    star5.classList.remove('shooting-star-5');
    void star5.offsetWidth;
    star5.classList.add('shooting-star-5');
    setTimeout(() => {
        starAnimation5();
    }, 11000);
}

starAnimation5();


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

// available Animation 

let 

