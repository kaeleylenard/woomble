// Execute function when scrolling
window.onscroll = function()  {headerFunction()};

// Get header
var header = document.getElementById("myHeader");

// Get offset position of navbar
var sticky = header.offsetTop;

// Add sticky class to header; remove sticky when leaving scroll position
function headerFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
