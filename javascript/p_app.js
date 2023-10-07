

// Scroll to top
const scrolltp = document.querySelector("#scrolltp");
console.log(1111111)
scrolltp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", function () {
  if (window.scrollY >= 700) {
    scrolltp.style.opacity = 1;
  } else {
    scrolltp.style.opacity = 0;
  }
});
window.addEventListener('load', function() {
  var loader = document.getElementById('loader');
  
    setTimeout(function() {
        loader.style.display = 'none';
    }, 2000);
    });
