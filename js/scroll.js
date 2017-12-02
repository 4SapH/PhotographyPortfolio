'use strict';

function scrollIt(element) {
  window.scrollTo({
    'behavior': 'smooth',
    'left': element.offsetLeft,
    'top': element.offsetTop
  });
}

const hero = document.querySelectorAll(".hero");
const arrowToRight = document.querySelector("#arrow");
const arrowToLeft = document.querySelector("#arrow2");
const content = document.querySelector("#content");

const mq = window.matchMedia( "(max-width: 768px" );

arrowToRight.addEventListener('click', function (e) {
  e.preventDefault();
  content.style.display = "block";
  scrollIt(content);
  setTimeout (function() {
    arrowToRight.style.display = "none";
  });
  setTimeout (function() {
    arrowToLeft.style.display = "block";
    if (mq.matches) {
      hero[0].style.display = "none";
      content.style.top = "0%";
    }
  }, 800);
  return false;
});

arrowToLeft.addEventListener('click', function (e) {
  e.preventDefault();
  if (mq.matches) {
    content.style.top = "100%";
  }
  hero[0].style.display = "block";
  scrollIt(hero[0]);
  setTimeout (function() {
    arrowToLeft.style.display = "none";
  });
  setTimeout (function() {
    arrowToRight.style.display = "block";
    content.style.display = "none";
  }, 800);
  return false;
});

window.onload = function() {scrollIt(hero[0])};




var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
       // downscroll code
   } else {
      // upscroll code
   }
   lastScrollTop = st;
}, false);
