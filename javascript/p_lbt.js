
const side = document.querySelector(".side");
const target = document.querySelector(".footer");


window.onscroll=function(){
    if(target.getBoundingClientRect().top<864)
    {
        side.style.opacity=0;
    }
    else{side.style.opacity=100;}
    console.log(target.getBoundingClientRect().top)
}


//3D卡片预实装
        // const movelimit=document.querySelector(".w1");
        // const card=document.querySelector(".w1");
        // //const shine=document.getElementById("shine");
        // movelimit.addEventListener("mousemove",(e)=>
        // {
        //     window.requestAnimationFrame(function(){
        //         movecard(e.clientX,e.clientY);
        //     });
        // });
        // const speed=2;
        // function movecard(x,y){
        //     var box =card.getBoundingClientRect();
        //     var calcX=(y-box.y-(box.height/2))/speed;
        //     var calcY=(x-box.x-(box.width/2))/speed* (-1);
        //     var calcZ=(box.height*box.y)/60;
        //     card.style.transform="rotateX"+"("+calcX+"deg"+")"+"rotateY"+"("+calcY+"deg"+")"; 
        //     shine.style.background="linear-gradient"+"("+calcZ+"deg"+",#ffffff,rgba(203, 219, 24, 0)";
        // }
        // movelimit.addEventListener("mouseleave",(e)=>
        // {
        //     window.requestAnimationFrame(function(){
        //         card.style.transform="rotateX(0) rotateY(0)";
        //         shine.style.background="rgba(0,0,0,0)"
        //     });
        // });   
