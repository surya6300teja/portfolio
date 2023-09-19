$(".Experience").click(function() {
    $(".Skills").removeClass("active-link");
    $(".Education").removeClass("active-link");
    $(".Experience").addClass("active-link");
    $(".skills").removeClass("active-tab");
    $(".education").removeClass("active-tab");
    $(".experience").addClass("active-tab");

});
$(".Education").click(function() {
    $(".Skills").removeClass("active-link");
    $(".Experience").removeClass("active-link");
    $(".Education").addClass("active-link");
    $(".skills").removeClass("active-tab");
    $(".experience").removeClass("active-tab");
    $(".education").addClass("active-tab");
});
$(".Skills").click(function() {
    $(".Experience").removeClass("active-link");
    $(".Education").removeClass("active-link");
    $(".Skills").addClass("active-link");
    $(".experience").removeClass("active-tab");
    $(".education").removeClass("active-tab");
    $(".skills").addClass("active-tab");
});


$(".fa-xmark").click(function(){
    var navUl = document.querySelector("nav ul");
    if (navUl.style.right === "0px") {
        navUl.style.right = "-200px"; // Hide the navigation menu
      } else {
        navUl.style.right = "0px"; // Show the navigation menu
      }
});

$(".fa-bars").click(function(){
    var navUl = document.querySelector("nav ul");
    if (navUl.style.right === "-200px") {
        navUl.style.right = "0px"; // Hide the navigation menu
      } else { 
        navUl.style.right = "-200px"; // Show the navigation menu
      }
});

// Function to be called when the element enters or leaves the viewport
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add the CSS class to trigger the effect
      entry.target.classList.add('animate-effect');
    } else {
      // Remove the CSS class to revert the effect
      entry.target.classList.remove('animate-effect');
    }
  });
}

// Create an Intersection Observer instance
const observer = new IntersectionObserver(handleIntersection, {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin
  threshold: 0.5, // Trigger when 50% of the element is visible
});

// Observe the element you want to trigger the effect on
const workElements = document.querySelectorAll('.work');
workElements.forEach((element) => {
  observer.observe(element);
});


$("svg").click(function(){


  const linkElement = document.querySelector('link[href]');
  const csslyt = './stylelyt.css';
  const cssdark = './style.css';

  const logo = document.querySelector('nav img.logo');
  const newSrc = './images/lytlogo.png';

  const invy = document.querySelector('img[src="./images/Picsart_23-09-18_15-48-33-091.jpg"]');
  const invylyt = './images/Picsart_23-09-18_22-07-58-410.jpg';

  if (linkElement.getAttribute('href') === csslyt) {
    // Revert to the original state
    linkElement.setAttribute('href', cssdark);
    logo.setAttribute('src', './images/Add a heading.png');
    invy.setAttribute('src', './images/Picsart_23-09-18_15-48-33-091.jpg');
  } else {
    // Apply the changes
    linkElement.setAttribute('href', csslyt);
    logo.setAttribute('src', newSrc);
    invy.setAttribute('src', invylyt);
  }

});