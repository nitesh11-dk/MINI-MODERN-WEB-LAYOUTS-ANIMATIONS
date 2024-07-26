
gsap.to(".main .innermain" ,{
    x:"-161%",
    scrollTrigger:{
        trigger:".main" ,
        scroller:"body" ,
        pin:true ,
        scrub:true,
        start:"top 0%" ,
        end:"bottom  100%" ,
    } ,
    duration:5 ,
    ease:"power4"


})
gsap.to(" .innermain h1" ,{
     fontWeight:700,
     fontSize: "170px",
    scrollTrigger:{
        trigger:".innermain" ,
        scroller:"body" ,
        pin:true ,
        scrub:1,

        start:"top 0%" ,
        end:"bottom  0%" ,
    },
    ease:"power4"
})

let divs =  document.querySelectorAll('.divs') ;
let image = document.querySelector('.image');
let imgh = image.getBoundingClientRect().height/2
let imgw = image.getBoundingClientRect().width/2 ;






divs.forEach(function(div){
    let ranh = Math.floor(Math.random()*300 +250)
    let ranw = Math.floor(Math.random()*200 + 400 )

      div.addEventListener("mouseenter",function(){
        let img = div.getAttribute('data-image')
    image.style.backgroundImage = `url(${img})`
     image.style.height = `${ranh}px`
     image.style.width = `${ranw}px`

      })



document.addEventListener("mousemove",function(details){
       let x  = details.x
       let y  = details.y
      image.style.left = `${x - imgw}px` ;
      image.style.top = `${y - imgh}px`;
})

})