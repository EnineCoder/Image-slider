let containerSlider = document.querySelector(".slider-container");
let ArrayImages = Array.from(
  document.querySelectorAll(".slider-container img")
);
let slideNumber = document.querySelector(".slide-number");
let previous = document.querySelector(".slider-controls .prev");
let next = document.querySelector(".slider-controls .next");
let indicator = document.querySelector(".slider-controls .indicator");
let spans = document.querySelectorAll(".slider-controls span");

// Get Numbers of Slide
const slideLength = ArrayImages.length;
// Set current slide
let currentSlide = 1;

// handle click on next and prev button
next.onclick = nextSlide;
previous.onclick = prevSlide;

// create pagination list
const paginationElement = document.createElement("ul");
paginationElement.id = "pagination-ul";

for (i = 1; i <= slideLength; i++) {
  let paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", i);
  paginationItem.appendChild(document.createTextNode(i));
  paginationElement.appendChild(paginationItem);
}
indicator.appendChild(paginationElement);

// Get the new created ul
const paginationNewUl = document.querySelector(".indicator ul");
const paginationArray = Array.from(paginationNewUl.querySelectorAll("li"));

// trigger the checker function
theChecker();
// Next Slide function
function nextSlide() {
  if (this.classList.contains("disabled")) {
    return;
  } else {
    currentSlide++;
    theChecker();
  }
}
// Previous Slide function
function prevSlide() {
  if (this.classList.contains("disabled")) {
    return;
  } else {
    currentSlide--;
    theChecker();
  }
}

// the checker function
function theChecker() {
  slideNumber.textContent = "Slide #" + currentSlide;

  removeAllAcitve();

  // set the active class on the current slide
  ArrayImages[currentSlide - 1].classList.add("active");
  // set the active class on the current pagination
  paginationNewUl.children[currentSlide - 1].classList.add("active");

  // check if current is the first one

  if (currentSlide == 1) {
    previous.classList.add("disabled");
  } else {
    previous.classList.remove("disabled");
  }
  if (currentSlide == ArrayImages.length) {
    next.classList.add("disabled");
  } else {
    next.classList.remove("disabled");
  }
}

// remove all the active cleasses from images and pagination bulletes

function removeAllAcitve() {
  // loop throught images
  ArrayImages.forEach((img) => {
    img.classList.remove("active");
  });
  // loop throught pagination bulletts
  paginationArray.forEach((item) => {
    item.classList.remove("active");
  });
}

paginationArray.forEach((item) => {
  item.addEventListener("click", (e) => {
    currentSlide = e.target.getAttribute("data-index");
    theChecker();
  });
});
