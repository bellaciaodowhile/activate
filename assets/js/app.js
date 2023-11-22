console.log('AppJS')
// Carousel activate
$('.owl-carousel.nav-carousel').owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    dots: false,
    navText: ["<img src='assets/img/icons/prevFill.png'>","<img src='assets/img/icons/nextFill.png'>"]
});
$('.owl-carousel.header').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<img src='assets/img/icons/prev.png'>","<img src='assets/img/icons/next.png'>"],
    responsive:{
        0:{
            items: 1.3,
            margin: 20
        },
        420:{
            items: 2.3,
            margin: 30
        },
        600:{
            items: 2.5,
        },
        800:{
            items: 3,
        },
        1000:{
            items: 3
        }
    }
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<img src='assets/img/icons/prevFill.png'>","<img src='assets/img/icons/nextFill.png'>"],
    responsive:{
        0:{
            items: 1
        },
        420:{
            items: 2,
        },
        600:{
            items: 3
        },
        1000:{
            items: 3
        }
    }
});
// Cards Images
const bgImages = [...document.querySelectorAll('.card-activate')];
bgImages.map(img => {
    let dataBg = img.getAttribute('data-bg');
    img.style.background = `url(${ dataBg }) no-repeat`;
});

let iconMenu = document.querySelector('.menu-burguer');

iconMenu.addEventListener('click', function() {
    if (iconMenu.classList.contains('open')) {
        iconMenu.classList.remove('open');
    } else {
        iconMenu.classList.add('open');
    }
}, false);
// Sidebar Activate
const triggerSidebar = document.querySelector('.menu-burguer');
const sidebarActivate = document.querySelector('.sidebar-activate');
const closeSidebar = document.querySelector('.sidebar-close');
triggerSidebar.onclick = (e) => {
    e.preventDefault();
    sidebarActivate.classList.toggle('active');
}
