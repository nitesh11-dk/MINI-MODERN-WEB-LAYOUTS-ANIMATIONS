let active = 3 ;

let mnCircle = document.querySelectorAll('.mncircle')
let sec = document.querySelectorAll('.sec')


gsap.to(mnCircle[active - 1],{
    opacity:0.5
})

gsap.to(sec[active - 1],{
    opacity:1
})


mnCircle.forEach(function(val ,idx){
 val.addEventListener('click',function(){
// alert("hello")
 gsap.to(".circle" ,{
    rotate: (3-(idx+1))*10 ,
    ease:Expo.easeInOut ,
    duration:1
 })
 allOff() ;
 gsap.to(this , {
    opacity:0.5
 })

 gsap.to(sec[idx],{
    opacity:1 ,
   delay:0.2
 })


 })
})

function allOff(){
    gsap.to(mnCircle,{
        opacity:0.12,
        ease:Expo.easeInOut ,
    }) ,

    gsap.to(sec,{
        opacity:0.4,
        ease:Expo.easeInOut ,
    })
    
}


gsap.to(
    ".circle",
     {
       rotate:0,
       ease: Expo.easeInOut ,
       duration:2  
     }
     
 );