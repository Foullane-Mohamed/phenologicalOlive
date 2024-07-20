<<<<<<< HEAD
// Ensure proper elements are selected
=======
>>>>>>> 260e44f74d5db7cd9f8895b36cf5e50e12064b37
let humbergerBar = document.querySelector('.humberger');
let nav_menu = document.querySelector('.nav_menu');
let nav_items = document.querySelectorAll('.nav_item');

humbergerBar.addEventListener('click', () => {
  humbergerBar.classList.toggle('active');
  nav_menu.classList.toggle('active');
});

nav_items.forEach((e) => {
  e.addEventListener('click', () => {
    nav_items.forEach((el) => {
      el.classList.remove('active_color');
    });
    e.classList.add('active_color');
    humbergerBar.classList.remove('active');
    nav_menu.classList.remove('active');
  });
});
<<<<<<< HEAD

// Access the Images
let slideImages = document.querySelectorAll('.slide-images img');
// Access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
// Access the indicators
let dots = document.querySelectorAll('.dot');

var counter = 0;

// Code for next button
next.addEventListener('click', slideNext);
function slideNext() {
  slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
  if (counter >= slideImages.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
  indicators();
}

// Code for prev button
prev.addEventListener('click', slidePrev);
function slidePrev() {
  slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
  if (counter == 0) {
    counter = slideImages.length - 1;
  } else {
    counter--;
  }
  slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
  indicators();
}

// Auto sliding
function autoSliding() {
  deletInterval = setInterval(timer, 3000);
  function timer() {
    slideNext();
    indicators();
  }
}
autoSliding();

// Stop auto sliding when mouse is over
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function () {
  clearInterval(deletInterval);
});

// Resume sliding when mouse is out
container.addEventListener('mouseout', autoSliding);

// Add and remove active class from the indicators
function indicators() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[counter].className += ' active';
}

// Add click event to the indicator
function switchImage(currentImage) {
  currentImage.classList.add('active');
  var imageId = currentImage.getAttribute('attr');
  if (imageId > counter) {
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
  } else if (imageId == counter) {
    return;
  } else {
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
  }
  indicators();
}
=======
>>>>>>> 260e44f74d5db7cd9f8895b36cf5e50e12064b37
