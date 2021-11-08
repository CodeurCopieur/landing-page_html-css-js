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


/*=============== INIT SCROLLTO ===============*/

function initScrollTo() {
  
  gsap.utils.toArray('#header a').forEach( link => {
    
    const target = link.getAttribute('href');

    if(!target) {
      return;
  }

    link.addEventListener('click', (e)=> {
      e.preventDefault();
      t1.reverse();
      gsap.to(window, {duration: 1.5, scrollTo: target, ease:'Power2.out'})
    })
  });
}

function init() {
  initScrollTo();
}



window.addEventListener('load', function() {
  init()
})