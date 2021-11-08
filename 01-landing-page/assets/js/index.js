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
      
      gsap.to(window, {duration: 1.5, scrollTo: target, ease:'Power2.out'}, "-=.25")
      t1.reverse();
    })
  });
}

/*=============== ACTIVE ITEM ===============*/

const getVh = () => {
  const vh = Math.max(document.documentElement.clientHeight || 0, window.clientHeight || 0);

  return vh;
}

gsap.utils.toArray('.item').forEach( (item, i) => {

  const navLinks = gsap.utils.toArray('.nav__item a');

  ScrollTrigger.create({
    trigger: item,
    start: 'top center',
    end: ()=> `+=${item.offsetHeight}`,
    toggleClass: {
        targets: navLinks[i],
        className: 'active-link'
    },
    //markers: true
  })
});

/*=============== CHANGE BACKGROUND ITEM ===============*/

ScrollTrigger.create({
  trigger: '#home',
  start:'top+=80top',
  endTrigger: '.footer',
  toggleClass: {
    targets: '#header',
    className: 'scroll-header'
  },
  //markers: true
});


/*=============== SHOW SCROLL TOP ===============*/

gsap.to('#scrollup', {
  scrollTrigger: {
    trigger: '.app',
    scrub: 1,
  },
  autoAlpha: .8,
  markers: true
})

function init() {
  initScrollTo();
}



window.addEventListener('load', function() {
  init()
})