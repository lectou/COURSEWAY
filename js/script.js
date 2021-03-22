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


document.addEventListener("scroll", handleScroll);

const scrollToTopBtn = document.querySelector(".scroll-To-Top");

function handleScroll() {
  let scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let GOLDEN_RATIO = 0.4;

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

const burger = document.getElementById('sidebarToggle');
const sidebar = document.querySelector('.sidebar');
const page = document.querySelector('.page');
const body = document.body;

burger.addEventListener('click', event => {

  if (body.classList.contains('show-sidebar')) {
    closeSidebar()
  } else {
    showSidebar()
  }
});

const back = document.querySelector('.back');
back.addEventListener('click', event => {
  closeSidebar()
});

function showSidebar() {
  let mask = document.createElement('div');
  mask.classList.add('mask');
  mask.addEventListener('click', closeSidebar);
  page.appendChild(mask);
  body.classList.toggle('show-sidebar');
  sidebar.classList.toggle('active');
}

function closeSidebar() {
  body.classList.remove('show-sidebar');
  sidebar.classList.remove('active');
  document.querySelector('.mask').remove();
}
