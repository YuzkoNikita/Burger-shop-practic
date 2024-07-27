/* Show menu start */
const navMenu = document.getElementById('nav-menu'),
      navClose = document.getElementById('nav-close'),
      navToggle = document.getElementById('nav-toggle')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
};

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
};
/* Show menu end */

/* Remove menu mobile start */
const navLink = document.querySelectorAll('.nav_link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));
/* Remove menu monile end */

/* Add shadow header start */
const shdowHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header');
};

window.addEventListener('scroll', shdowHeader);
/* Add shadow header end */

/* Show scroll up start */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);
/* Show scroll up end */

/* Scroll sections active link start */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']');

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionsClass.classList.add('active-link');
    } else {
        sectionsClass.classList.remove('active-link');
    };
    });
};

window.addEventListener('scroll', scrollActive);
/* Scroll sections active link end */

/* Scroll reveal animation start */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
});

sr.reveal('.home_data, .footer');
sr.reveal('.home_dish', {delay: 500, distance: '100px', origin: 'bottom'});
sr.reveal('.home_burger', {delay: 1200, distance: '100px', duration: 1500});
sr.reveal('.home_ingredient', {delay: 1600, interval: 100});
sr.reveal('.recipe_img, .delivery_img, .contact_image', {origin: 'left'});
sr.reveal('.recipe_data, .delivery_data .contact_data', {origin: 'right'});
sr.reveal('.popular_card', {interval: 100});
/* Scroll reveal animation end */
