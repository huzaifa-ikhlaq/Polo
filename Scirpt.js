// loading
let video = document.querySelector('#video')
let tag = document.querySelectorAll('#tag')
let headingWord1 = document.querySelectorAll('#heading-word-1')
let headingWord2 = document.querySelectorAll('#heading-word-2')
let arrowIcon = document.querySelectorAll('#arrow-icon')
let button1 = document.querySelectorAll('#button-1')
let button2 = document.querySelectorAll('#button-2')
let cursorIcon1 = document.querySelector('#cursor-icon-1')
let cursorIcon2 = document.querySelector('#cursor-icon-2')
let paragragh = document.querySelector('#paragragh')
let bottomSection = document.querySelector('#bottom-section')

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        video.classList.remove('opacity-0')
        // tag 
        tag.forEach(el => {
            el.classList.remove('opacity-0')
        });
        //  headingWord1
        headingWord1.forEach(el => {
            el.classList.remove('opacity-0', 'translate-y-3')
            el.classList.add('translate-y-0')
        });
        //  headingWord2 
        headingWord2.forEach(el => {
            el.classList.remove('opacity-0', 'translate-y-8')
            el.classList.add('translate-y-0')
        });
        // arrowIcon 
        arrowIcon.forEach(el => {
            el.classList.remove('opacity-0')
        });
        // button1 
        button1.forEach(el => {
            el.classList.remove('opacity-0', 'translate-y-3')
            el.classList.add('translate-y-0')
        });
        // button2 
        button2.forEach(el => {
            el.classList.remove('opacity-0', 'translate-y-5')
            el.classList.add('translate-y-0')
        });
        // cursorIcon1
        cursorIcon1.classList.remove('opacity-0')
        // cursorIcon2 
        cursorIcon2.classList.remove('opacity-0')
        // paragragh words 
        for (let i = 0; i < 21; i++) {
            setTimeout(() => {
                let word = document.querySelector(`#word-${i}`);
                if (word) {
                    word.classList.remove('opacity-0', 'translate-y-3');
                    word.classList.add('translate-y-0');
                }
            }, i * 100)
        }
        // bottom-Section imgs
        setTimeout(() => {
            bottomSection.classList.remove('opacity-0', '-translate-x-10')
            bottomSection.classList.add('translate-x-0')
        }, 720)
    }, 700)

})

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
        customCursor.classList.remove('shadow-[0_0_30px_5px_rgba(255,255,0,0.3)]', '-left-[4.5px]', 'bg-white')
        customCursor.classList.add('-translate-x-1/2', 'border', 'border-white', 'h-11', 'w-32.5')
    })
    img.addEventListener('mouseleave', () => {
        customCursor.classList.add('shadow-[0_0_30px_5px_rgba(255,255,0,0.3)]', '-left-[4.5px]', 'bg-white')
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

// scroll Animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', '-translate-x-20');
            entry.target.classList.add('opacity-100', 'translate-x-0');
        }
    });
}, {
    threshold: 0.1,
});

document.querySelectorAll('.translate-item').forEach((el) => {
    observer.observe(el);
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

// available Animation 

let greenRadius = document.querySelector('.greenRadius')

function available() {
    greenRadius.classList.add('greenRadiusSpread')
    setTimeout(() => {
        greenRadius.classList.remove('greenRadiusSpread')
        setTimeout(() => {
            available()
        }, 1500)
    }, 500)
}

available()

const section = document.querySelector('#slider-section');
const slider = document.querySelector('.slider');

window.addEventListener('scroll', () => {
    // Only run on screens wider than 1300px
    if (window.innerWidth <= 1300) return;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Check if section is in view
    if (scrollY + windowHeight >= sectionTop && scrollY <= sectionTop + sectionHeight) {
        const scrollInside = scrollY + windowHeight - sectionTop;
        const maxScroll = windowHeight + sectionHeight;
        const progress = scrollInside / maxScroll;

        const maxTranslate = -1000; // adjust as needed
        const translateX = maxTranslate * progress;

        slider.style.transform = `translateX(${translateX}px)`;
    }
});

// section-8
// question-row animation 
let questionRows = document.querySelectorAll('.question-row');

// Function to update max-heights
function updateHeights() {
    questionRows.forEach(row => {
        const plusIcon = row.querySelector('.plus-icon');
        const header = row.querySelector('.question-header');
        const collapsedHeight = header.offsetHeight + parseInt(getComputedStyle(row).paddingTop) + parseInt(getComputedStyle(row).paddingBottom);

        if (row.classList.contains('open')) {
            row.style.maxHeight = row.scrollHeight + "px";
        } else {
            row.style.maxHeight = collapsedHeight + "px";
        }
    });
}

// Initialize on load
updateHeights();

// Click handlers
questionRows.forEach(row => {
    const plusIcon = row.querySelector('.plus-icon');
    const header = row.querySelector('.question-header');
    const collapsedHeight = header.offsetHeight + parseInt(getComputedStyle(row).paddingTop) + parseInt(getComputedStyle(row).paddingBottom);

    // Click scale effect
    row.addEventListener('mousedown', () => row.classList.add('transform', 'scale-95'));
    row.addEventListener('mouseup', () => row.classList.remove('scale-95'));
    row.addEventListener('mouseleave', () => row.classList.remove('scale-95'));

    // Toggle open/collapse
    row.addEventListener('click', () => {
        const isOpen = row.classList.contains('open');

        if (!isOpen) {
            row.classList.add('open');
            row.style.maxHeight = row.scrollHeight + "px";
            plusIcon.classList.add('rotate-45');
        } else {
            row.classList.remove('open');
            row.style.maxHeight = collapsedHeight + "px";
            plusIcon.classList.remove('rotate-45');
        }
    });
});

// ✅ Recalculate on screen resize
window.addEventListener('resize', () => {
    updateHeights();
});

