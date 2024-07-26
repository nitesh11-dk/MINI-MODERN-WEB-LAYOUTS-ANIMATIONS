let circle = document.querySelector(".circle") ;

document.addEventListener("mousemove", function(details){
let x = details.pageX ;
let y = details.pageY ;
  setTimeout(function(){
  circle.style.top = y +'px' ;
  circle.style.left = x +'px' ;
  }, 100)

})

$('.main_body h1').textillate({
    in:{effect:'fadeInUp'} 
    ,loop:true ,
    out:{ effect:'fadeOutRight'}
    
});



$('.contct p ').textillate({
    in:{effect:'fadeInUp'  ,
delay:15}  ,
autoStart:false ,
callback: function(){
        gsap.to('.down .contct img' ,{
            opacity:1 ,
            y:0 ,
            ease:"elastic"
        })
    }
  
})



gsap.to('.fader' , {
    scrollTrigger:{
        trigger:'.down' , 
        // markers:true ,
        start: '15% 6%' ,
        toggleActions:'play pause resume reverse'
    } ,
    y:-80 ,
    opacity:0 ,
    duration:2  ,
    stagger: 0.3 ,
    onComplete: function(){
      $('.contct p ').textillate('start')
    }
});



