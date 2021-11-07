/*=============== SHOW MENU ===============*/

let t1 = new TimelineMax({ paused: true});

t1
.to("#nav-menu", 0.1, {top: "4rem"})
.staggerFrom(".nav__item", 0.5, { opacity: 0 }, 0.15, ".15")
.reverse();


const navToggle = document.querySelector('#nav-toggle');

navToggle.addEventListener('click', () => {
  t1.reversed(!t1.reversed());
})