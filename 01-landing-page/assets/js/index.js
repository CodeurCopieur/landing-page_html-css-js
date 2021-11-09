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

/*=============== DARK LIGHT THEME ===============*/

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-toggle-right';

// si sélectionné par l'utilisateur
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// On obtient le thème actuel de l'interface en validant la classe dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

// Nous validons si l'utilisateur a préalablement choisi 
if (selectedTheme) {
  // Si la validation est remplie, nous demandons quel était le problème pour savoir si nous avons activé ou désactivé le dark 
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

// Activer/désactiver le thème manuellement avec le bouton 
themeButton.addEventListener('click', () => {
    // Ajouter ou supprimer le thème sombre/icône
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Nous sauvegardons le thème et l'icône actuelle que l'utilisateur a choisi 
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

function init() {
  initScrollTo();
}



window.addEventListener('load', function() {
  init()
})