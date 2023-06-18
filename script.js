
// navbar js code
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu button');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('opened')
})
document.querySelectorAll('.menu-list').forEach(n => n.addEventListener('click', () => {
  menu.classList.remove('opened');
  
}))

// FAQ section js
let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})

// back to top js


class KS_ToTop {
   
  constructor(selector, appearPx, scrollSpd=50) {
     this.$selector = document.querySelector(selector);
   this.appearPx = appearPx;
     this.scrollSpd = scrollSpd;
     this.timeOut = null;
     this.isAutoScrolling = false;
     
     this.init();
  }
  
  init() {
     // Add event listeners for page scrolling
     document.addEventListener('mousewheel', 	  (e) => this.scrollHandler(e), false);
     document.addEventListener('DOMMouseScroll', (e) => this.scrollHandler(e), false);
     
     // Add event listener for click
     this.$selector.addEventListener('click', () => {
        this.$selector.classList.remove('ks-appear');
     this.scrollToTop();
     });
  }
  
  scrollHandler(e) {
     var offsetY = window.pageYOffset;

     if(!this.isAutoScrolling) {
        if(offsetY >= this.appearPx) {
           this.$selector.classList.add('ks-appear');
        }
        else {
           this.$selector.classList.remove('ks-appear');
        }
     }
  }
  
  scrollToTop() {
     this.isAutoScrolling = true;

     if(document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
       window.scrollBy(0, -this.scrollSpd);
       this.timeOut = setTimeout( () => { this.scrollToTop(); }, 10);
     }
     else {
        clearTimeout(this.timeOut);
        this.isAutoScrolling = false;
     }
  }
}

document.addEventListener('DOMContentLoaded', function () {
 var toTop = new KS_ToTop('#back-to-top', 200);
});