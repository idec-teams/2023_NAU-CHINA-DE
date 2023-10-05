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

        imgs[limg].style.transform= `translateX(`+(-400)*(i+1)+`px) translateZ(`+(-i*400)+`px) rotateY(45deg)`;
        imgs[rimg].style.transform = `translateX(`+(400)*(i+1)+`px) translateZ(`+(-i*400)+`px) rotateY(-45deg)`;
    }
    imgs[current].style.transform = `translateZ(280px)`;
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


// var cards = document.getElementsByClassName("picture");
// console.log(cards[0].children[1].children[1]);
// for (var i = 0 ;i<cards.length;i++)
// {
//   cards[i].addEventListener("click",function(){
//     $(cards[i]).toggle(1000);
//   });
// }
$(".jtext").hide();
$(".hou").click(function(){
  $(".jtext").slideToggle(500)});