window.addEventListener('mousemove' , function(detls){
    gsap.to('.circle' ,{
        x:detls.clientX ,
        y:detls.clientY,
        duration:0.1 ,
        ease:Expo.easeInOut
    })
  
})





function h1Create(){
    let h1s = document.querySelectorAll(".reveal") ;
   
    h1s.forEach(function(h1){
       let spanParent = document.createElement("span");
        let spanChild = document.createElement("span");
   
        spanParent.classList.add("parent");
        spanChild.classList.add("child");
      
        spanChild.innerHTML = h1.innerHTML ;
   
        spanParent.appendChild(spanChild);
   
   
         h1.innerHTML = "" ;
        h1.appendChild(spanParent);
   
   
   
   
    })
   
   
   
   }

   function setter(){
     gsap.set(".home nav a" , {
        y:"-100%", 
        opacity: 0 
     })
     gsap.set(".home .cntnt .cntnt1 h1" , {
        y:"-100%", 
        opacity: 0 
     }) 
     gsap.set(".home .cntnt .cntnt1 .para p" , {
       x:"30%",
        opacity: 0 
     }) 
     gsap.set(".home .cntnt .cntnt2 h1 .design " , { 
        opacity: 0 
     }) 
     gsap.set(".home .cntnt .cntnt2 h1 .visual " , {
        // y:"-100%", 
        scale:0 ,
        opacity: 0 
     })  
     gsap.set(".home .cntnt .cntnt2 .icon " , {
        y:"-10%", 
        
        opacity: 0 
     })  
}

   let loder = function (){
    let tl = gsap.timeline();


tl
.from(".loder .child span",{
    stagger:0.2 ,
    duration:1,
    delay:0.3,
    x:"100" ,
    ease:Circ.easeInOut,
})
.to(".loder .parent .child",{
    y:"-100%" ,
    stagger:0.2 ,
    duration:1,
    ease:Circ.easeInOut,
})
.to(".box1",{
    height:0 ,
    duration:2,
    ease:Expo.easeInOut ,
})

.to(".box2",{
    height: "18%",
    bottom:"82%" ,
    duration:2,
    delay:-3,
    ease:Expo.easeInOut ,
})

.to(".box3",{
    height:"100%",
    display:"block" ,
    duration:1.2,
    delay:-1.5,
    ease:"elastic",
    onComplete:function(){
     homeanimation();
    },

  
})

}

function homeanimation(){
    let tl = gsap.timeline() ;

    tl .to(".home nav a" , {
        stagger:0.02 ,
        y:"0%", 
        opacity: 1,
        duration:0.5,
        ease: "Expo.easeInOut"
     })

     .to(".home .cntnt .cntnt1 h1",{
        y:"0%", 
        opacity: 1,
        duration:0.4,
        ease: "Expo.easeInOut"
     })

     .to(".home .cntnt .cntnt2 h1 .design",{
        opacity: 1,
        duration:0.4,
        delay:-0.8,
        ease: "Expo.easeInOut"
     })
     .to(".home .cntnt .cntnt1 .para p" ,{
            stagger:0.01 ,
            x:"0%",
        opacity: 1,
        duration:0.15,
        dealy:-0.5,
        ease: "Expo.easeInOut"

     }) 
     .to(".home .cntnt .cntnt2 h1 .visual",{
 scale:1 ,
 opacity: 1,
 duration:0.75,
 ease: "Expo.easeInOut"

     })

     .to(".home .cntnt .cntnt2 .icon",{
       y:"0%",
        opacity: 1,
        duration:0.6,
        ease: "elastic" ,
        yoyo:true ,
        repeat:-1
            })

}


   h1Create();
   setter();
   loder();












