

        window.addEventListener('load', function () {
            var loader = document.getElementById('loader');

            setTimeout(function () {
                loader.style.display = 'none';
            }, 2000);
        });

const side = document.querySelector(".side");
const target = document.querySelector(".headPicture");


window.onscroll=function(){
    if(target.getBoundingClientRect().top<-810)
    {
        side.style.opacity=100;
    }
    else{side.style.opacity=0;}
    console.log(target.getBoundingClientRect().top)
}



        var nav = document.querySelectorAll('.second');
    for (var i = 0; i < nav.length; i++) {
        nav[i].addEventListener('mouseenter', function () {
            var first = this.querySelector('.first');
            var secondChild = first.children[1];
            var img = this.querySelector('.ims');

            secondChild.style.opacity = "0";
            secondChild.style.transition = "opacity 0.5s";
            secondChild.style.display = "block";

            setTimeout(function () {
                secondChild.style.opacity = "1";
            }, 200);

            img.classList.add("fade-out");

            img.addEventListener("transitionend", function () {
                img.src = "../img/icon2.png";
                img.classList.remove("fade-out");
            }, { once: true });
        });

        nav[i].addEventListener('mouseleave', function () {
            var first = this.querySelector('.first');
            var secondChild = first.children[1];
            var img = this.querySelector('.ims');

            secondChild.style.opacity = "0";
            secondChild.style.transition = "opacity 0.3s";

            img.classList.add("fade-out");

            img.addEventListener("transitionend", function () {
                secondChild.style.display = "none";
                img.src = "../img/icon1.png";
                img.classList.remove("fade-out");
            }, { once: true });
        });
    }



window.addEventListener('DOMContentLoaded', function () {
    updateLayout(); // 手动触发一次更新布局函数
});

window.addEventListener('resize', function () {
    updateLayout();
});

function updateLayout() {
    if (window.innerWidth < 768) {
        var img = document.getElementsByClassName('ims');
        for (var i = 0; i < img.length; i++) {
            img[i].style.width = '15%';
        }

        var secondUls = document.querySelectorAll('.second ul');
        secondUls.forEach(function (ul) {
            ul.style.top = '0';
            ul.style.right = '80px';
            ul.style.width = '375%';
        });
    } else {
        var img = document.getElementsByClassName('ims');
        for (var i = 0; i < img.length; i++) {
            img[i].style.width = '22%';
        }

        var secondUls = document.querySelectorAll('.second ul');
        secondUls.forEach(function (ul) {
            ul.style.top = '40px';
            ul.style.right = '-45px';
            ul.style.width = '268%';
        });
    }
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