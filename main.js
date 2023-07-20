// grabbing open button (hamburger/nav__icon__open) and close button (x/nav__icon__close)
const navOpenElement = document.querySelector(".nav__icon__open");
const navCloseElement = document.querySelector(".nav__icon__close");
// grabbing Nav List Items
const navList = document.querySelector(".nav__list");
// grabbing nav__bg__overlay element
const navBgOverlay = document.querySelector(".nav__bg__overlay");

// Create function to OPEN the Mobile Navigation
const navOpen = () => {
  // by adding a 'show' class to html element next to 'nav__list' class ...
  navList.classList.add("show");
  // and activating background overlay ...
  navBgOverlay.classList.add("active");
  // and stopping website from scrolling (altering 'body' element) ...
  document.body.style =
    "visibility: visible; height: 100vh; width: 100vw; overflow-y: hidden";
  // height: 100vh - the hight of whole website will be 100vh that means that we cannot scroll vertically anymore whenever we have 100vh height
  // width: 100vw - the same thing as with height 100vh we cannot scroll horizontally anymore whenever we have 100vw width
  // whatever element will be outside of 100vh and 100vw will be hidden because we have 'overflow: hidden;'
  // THIS IS HOW WE MAKE THINGS NON-SCROLLABLE whenever we open the Mobile menu
};

// Create function to CLOSE the Mobile Navigation
const navClose = () => {
  // by deleting a 'show' class from html element next to 'nav__list' class ...
  navList.classList.remove("show");
  // and deactivating background overlay ...
  navBgOverlay.classList.remove("active");
  // and make website be able to scroll again (getting back initial style for 'body' element) ...
  document.body.style =
    "visibility: visible; height: 100vh; width: 100%; overflow-x: hidden";
  // height: initial - what we had in our initial moment, don't have any specific height that is why we will have that scroll back
  // width: 100% - will make the element as wide as the parent container (html in our case)
};

// Putting navOpen and navClose arrow functions into action with eventListeners:
navOpenElement.addEventListener("click", navOpen);
// whenever we click on navOpenElement(hamburger icon) it will open the Mobile Menu

navCloseElement.addEventListener("click", navClose);

// Closing Mobile Menu whenever you click outside the Menu
navBgOverlay.addEventListener("click", navClose);

// !!! LINK THIS JS with HTML index.html file - on the bottom of body element
