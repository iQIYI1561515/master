  var backToTop=document.querySelector(".backToTop");
  var clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
  var isTop=true;
  var timer=null;
  backToTop.style.display="none";
  window.onscroll=function(){
    var topH=document.documentElement.scrollTop||document.body.scrollTop; 
    if(topH>0){
      backToTop.style.display="block";
    }else{
        backToTop.style.display="none";
    }
  }
  backToTop.onclick=function(){
    timer=setInterval(function(){
        var topH=document.documentElement.scrollTop||document.body.scrollTop;
        var stepLength=Math.ceil(topH/5);
        document.documentElement.scrollTop=document.body.scrollTop=topH-stepLength;
        if(topH==0){
          clearInterval(timer);
        }
     },50);
  }