// counter
$(document).ready(function () {
    
    $('.counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});


// Set date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// selecting back-to-top button
const toplink = document.querySelector(".top-link");

// selecting navbar links div with class of collapse
const navbar = document.querySelector(".navbar");
const navbarlinksDiv = document.getElementById("collapsibleNavId");
const navToggler = document.querySelector(".navbar-toggler");

// Accessing window scroll object
window.addEventListener("scroll", function () {
// console.log(window.pageYOffset);
const scrollHeight = window.pageYOffset;
if (scrollHeight > 600) {
  toplink.classList.add("show-link");
} else {
  toplink.classList.remove("show-link");
}
});
// Smooth Scrolling
const smoothSroll = document.querySelectorAll(".nav-link");
smoothSroll.forEach(function (link) {
link.addEventListener("click", function (e) {
  // this prevents the #s from navigating to sections by default
  e.preventDefault();
  // window.location.assign(e.srcElement.href)
  // 'srcElement' is deprecated
  // using event.target property instead
  window.location.assign(e.target.href)
  
  // window.location.replace(e.srcElement.href);
  // Navigate to specific spot
  const id = e.currentTarget.getAttribute("href").slice(1);
  // slice extracts a section of a string without modifying original string
  const element = document.getElementById(id);

  // Calculate the heights
  const navbarHeight = navbar.getBoundingClientRect().height;
  console.log(navbarHeight);
  const navbarlinksHeight = navbarlinksDiv.getBoundingClientRect().height;
  console.log(navbarlinksHeight);

  // offsetTop property give a number represting the top position of the element in pixels
  let position = element.offsetTop - navbarHeight;
  window.scrollTo({
    left: 0,
    top: position,
  });
  // auto close the navbar when clicked
  $(".navbar-collapse").collapse("hide");
});
});
