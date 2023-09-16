 const la=document.querySelector(".left-arror")
 const ra=document.querySelector(".right-arror")
 const allItem=document.querySelectorAll(".item")
 const classstr=["one","two","three","four","five","six"]

 //右侧跳转函数
const mover=()=>{
    classstr.unshift(classstr[allItem.length-1])
    classstr.pop()
    for(var i = 0 ;i <= allItem.length-1;i++)
    {
        allItem[i].className=`item ${classstr[i]}`
        if(allItem[i].className.includes("one"))
        {
            allItem[i].classList.add("active")
        }
    }
}
const movel=()=>{
    classstr.push(classstr[0])
    classstr.shift()
    for(var i = 0 ;i <= allItem.length-1;i++)
    {
        allItem[i].className=`item ${classstr[i]}`
        if(allItem[i].className.includes("one"))
        {
            allItem[i].classList.add("active")
        }
    }
}
 //右侧按钮
 ra.addEventListener("click",mover)

 la.addEventListener("click",movel)

 const totop = document.querySelector(".totop");
 const target = document.querySelector(".target");
const go = ()=>{
    var timer = null;
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn(){
    var oTop = document.body.scrollTop || document.documentElement.scrollTop;
    if(oTop > 0){
    document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
    timer = requestAnimationFrame(fn);
    }else{
    cancelAnimationFrame(timer);
} 
});
}
setInterval(mover,2000);
const p1 = document.querySelector(".p1");
const p2 =document.querySelector(".p2");




window.onscroll=function(){
    if(target.getBoundingClientRect().top<-50)
    {
        totop.style.opacity=100;
    }
    else{totop.style.opacity=0;}

    if(p1.getBoundingClientRect().top<400)
    {
        p1.style.opacity=100;
        p1.style.left=0;
    }
    else{p1.style.opacity=0;
        p1.style.left="100px";}
        if(p2.getBoundingClientRect().top<400)
    {
        p2.style.opacity=100;
        p2.style.left=0;
    }
    else{p2.style.opacity=0;
        p2.style.left="-100px";}
    



    console.log(p1.getBoundingClientRect().top)
}


 totop.addEventListener("click",go)

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
