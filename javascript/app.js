//图片轮播
var imgs = document.getElementsByClassName("rotate-img");
var len = imgs.length;
var current = 0;

var timer;

function wrapper() {
    frount();
    bind();
    autoplay();
};
wrapper();

function frount() {
    var mlen = Math.floor(len/2);
    var limg , rimg;
    for(var i=0;i<mlen;i++){


        limg = len+current-i-1;
        rimg = current+i+1;

        if(limg>=len){
            limg -= len;
        }
        if(rimg>=len){
            rimg -= len;
        }

        imgs[limg].style.transform= `translateX(`+(-150)*(i+1)+`px) translateZ(`+(200-i*100)+`px) rotateY(30deg)`;
        imgs[rimg].style.transform = `translateX(`+(150)*(i+1)+`px) translateZ(`+(200-i*100)+`px) rotateY(-30deg)`;
    }
    imgs[current].style.transform = `translateZ(300px)`;
};

function bind() {
    for(var i=0 ;i<len;i++){
        (function (i) {
            imgs[i].onclick=function () {
                current = i;
                frount();
            }
        })(i);
        imgs[i].onmouseenter=function () {
            clearInterval(timer);
        }
        imgs[i].onmouseout = function () {
            autoplay();
        }
    }
};

function autoplay() {
    timer = setInterval(function () {
        if(current>=len-1){
            current=0;
        }else {
            current++;
        }
        frount();
    },3000)
}


// Scroll to top
const scrolltp = document.querySelector("#scrolltp");
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

// Theme

const themeToggle = document.querySelector(".checkbox");
const body = document.querySelector("body");
const darkmode = localStorage.getItem("dark");

if (darkmode) {
  body.classList.add("dark");
  themeToggle.checked = true;
}

themeToggle.addEventListener("change", function () {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("dark", "active");
  } else {
    localStorage.removeItem("dark");
  }
});
