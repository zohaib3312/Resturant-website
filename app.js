const slides = document.querySelectorAll('.slide');
const heroTitle = document.getElementById('hero-title');
const heroDescription = document.getElementById('hero-description');
let currentSlide = 0;

function changeSlide() {
  slides[currentSlide].classList.remove('active');
  
  currentSlide = (currentSlide + 1) % slides.length;
  
  slides[currentSlide].classList.add('active');
  
  const newTitle = slides[currentSlide].getAttribute('data-title');
  const newDescription = slides[currentSlide].getAttribute('data-description');
  
  heroTitle.textContent = newTitle;
  heroDescription.textContent = newDescription;
}

setInterval(changeSlide, 3000); // Change slide every 3 seconds

// Hamburger functionality
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});


// Select the scrolled navbar element
const scrolledNavbar = document.getElementById('scrolled-navbar');

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
  if (window.innerWidth >= 769) { // Apply only for large screens
    if (window.scrollY > 100) { // Show scrolled-navbar when user scrolls down 100px
      scrolledNavbar.classList.add('active');
    } else {
      scrolledNavbar.classList.remove('active');
    }
  }
});




// Function to animate the counters
const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the number, the faster the counter

const updateCount = (counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    // Increment rate
    const increment = target / speed;

    // If the current count is less than the target, increment
    if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(() => updateCount(counter), 20);
    } else {
        counter.innerText = target;
    }
};

// Function to handle when the counters come into view
const triggerCounters = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            updateCount(counter);
            observer.unobserve(counter); // Stop observing once it's triggered
        }
    });
};

// Create an intersection observer
const observer = new IntersectionObserver(triggerCounters, {
    threshold: 0.5 // Trigger when 50% of the element is in view
});

// Apply the observer to each counter
counters.forEach(counter => {
    observer.observe(counter);
});



// Wait for the window to fully load
window.addEventListener('load', function() {
  // Add the "loaded" class to the body
  document.body.classList.add('loaded');
});
