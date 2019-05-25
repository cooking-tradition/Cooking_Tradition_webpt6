class NavButton {
    constructor(element){
      //  assign this.element to the element DOM reference
        this.element = element;
        //  Get the HTML element class nav-tags assign this.navItems to it
        this.navItems = document.querySelector(".nav-tags");
        // assign a clickhandler to this.element that invokes this.handleClick
        this.element.addEventListener('click', () => this.handleClick());
    }
    handleClick() {
      // when handleClick is invoked, get all instances of class navigation-button, store them in a NodeList, iterate over the NodeList, and for each one, toggle between active and hidden attributes
        document.querySelectorAll('.navigation-button').forEach(element => element.classList.toggle('active'));
        this.navItems.classList.toggle('hidden')
    }
}
// get all instances of class navigation-button and store them in a NodeList, iterate over the list, and for each one, assign value menuButton
const menuButton = document.querySelectorAll(".navigation-button").forEach(button => new NavButton(button));

// run this function when the page loads
window.onload = function() {
  // get all instances of class title and assign them to value logo
    let logo = document.getElementsByClassName("title");
    // animate target (logo) to fade in and slide in for 2 seconds
    TweenLite.from(logo, 2, {opacity:0, left:"300px"});
  }
  
let html = document.documentElement;
let body = document.body;

let scroller = {
  target: document.querySelector(".gsap-container"),
  ease: 0.05, // <= scroll speed
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0,
};

let requestId = null;

TweenLite.set(scroller.target, {
  rotation: 0.01,
  force3D: true
});

window.addEventListener("load", onLoad);

function onLoad() {    
  updateScroller();  
  window.focus();
  window.addEventListener("resize", onResize);
  document.addEventListener("scroll", onScroll); 
}

function updateScroller() {
  
  let resized = scroller.resizeRequest > 0;
    
  if (resized) {    
    let height = scroller.target.clientHeight;
    body.style.height = height + "px";
    scroller.resizeRequest = 0;
  }
      
  let scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

  scroller.endY = scrollY;
  scroller.y += (scrollY - scroller.y) * scroller.ease;

  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY;
    scroller.scrollRequest = 0;
  }
  
  TweenLite.set(scroller.target, { 
    y: -scroller.y 
  });
  
  requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}

function onScroll() {
  scroller.scrollRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

function onResize() {
  scroller.resizeRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}
