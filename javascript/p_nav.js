var nav=document.querySelector(".guidelist");
var people=nav.children[1];
var f1=0;
var f2=0;
var f3 = 0;
people.onclick=function()
{
    if (f1==0)
    {
        var target=document.querySelector('.smallerlist1');
        target.style.opacity=100;
        console.log(target);
        f1=1;
    }
    else{
        var target=document.querySelector('.smallerlist1');
        target.style.opacity=0;
        f1=0;
    }
   
}
var nav2=document.querySelector(".guidelist");
var t=nav.children[3];
t.onclick=function()
{
    if(f2==0)
    {
    var target=document.querySelector('.smallerlist2');
    target.style.opacity=100;
    console.log(target);
    f2=1;
    }
    else{
    var target=document.querySelector('.smallerlist2');
    target.style.opacity=0;
    f2=0;
    }  
}


var t1=nav.children[2];
t1.onmouseover=function()
{
    var target=document.querySelector('.smallerlist3');
    target.style.opacity=100;
    console.log(target);
}
t1.onmouseout=function(){
    var target=document.querySelector('.smallerlist3');
    target.style.opacity=0;
}