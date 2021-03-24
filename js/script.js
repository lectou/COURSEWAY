
// ----------scroll to link---------------------------------
const anchors = document.querySelectorAll('a.scroll')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  })
}


// ----------button to top---------------------------------

document.addEventListener("scroll", handleScroll);

const scrollToTopBtn = document.querySelector(".scroll-To-Top");

function handleScroll() {
  let scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let GOLDEN_RATIO = 0.2;

  if ((document.documentElement.scrollTop / scrollableHeight) > GOLDEN_RATIO) {
    //show button
    scrollToTopBtn.classList.add("scroll-To-Top__active")
  } else {
    //hide button
    scrollToTopBtn.classList.remove("scroll-To-Top__active")
  }
}

scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ----------burger menu---------------------------------

const burger = document.getElementById('menuToggle');
const mobileMenu = document.querySelector('#mobile_menu');
const closeMenuLink = document.querySelectorAll('.mb-link');
const body = document.body;

burger.addEventListener('click', event => {

  if (body.classList.contains('show-menu')) {
    closeMenu()
  } else {
    showMenu()
  }
});

const back = document.querySelector('.back');
back.addEventListener('click', event => {
  closeMenu()
});

function showMenu() {
  body.classList.toggle('show-menu');
  mobileMenu.classList.toggle('active');
}

function closeMenu() {
  body.classList.remove('show-menu');
  mobileMenu.classList.remove('active');
}

closeMenuLink.forEach(item => {
  item.addEventListener('click', event => {
    closeMenu()
  })
})
