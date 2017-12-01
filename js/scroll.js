'use strict';

function scrollIt(element) {
  window.scrollTo({
    'behavior': 'smooth',
    'left': element.offsetLeft,
    'top': 0
  });
}

const hero = document.querySelectorAll(".hero");
const arrowToRight = document.querySelector("#arrow");
const arrowToLeft = document.querySelector("#arrow2");
const content = document.querySelector("#content");

arrowToRight.addEventListener('click', function (e) {
  e.preventDefault();
  scrollIt(content);
  setTimeout (function() {
    arrowToRight.style.display = "none";
  });
  setTimeout (function() {
    arrowToLeft.style.display = "block";
  }, 800);
  return false;
});

arrowToLeft.addEventListener('click', function (e) {
  e.preventDefault();
  scrollIt(hero[0]);
  setTimeout (function() {
    arrowToLeft.style.display = "none";
  });
  setTimeout (function() {
    arrowToRight.style.display = "block";
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
