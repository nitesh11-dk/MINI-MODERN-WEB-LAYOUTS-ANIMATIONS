

$(".anim").textillate(
    {
        in: { effect:"fadeIn" , delay:"150"}
    }
);

let tl = new  gsap.timeline();

tl.from(".lrow a" ,{
    stagger: 0.2,
    opacity: 0,
    x:10
})

tl.from(".playbtn .btn" ,{
    stagger: 0.2,
    opacity: 0,
    x:10
},"-=1")

tl.from(".hero1 img" ,{
    opacity: 0,
    y:30 ,
    duration:1.3 ,
    ease:"Expo.InOUt"
},"2")


window.addEventListener("mousemove",function(details){
    let circle0 = document.querySelector(".circle0") ;
    let circle1 = document.querySelector(".circle1") ;
    let circle2 = document.querySelector(".circle2") ;
    let circle3 = document.querySelector(".circle3") ;
    let circle4 = document.querySelector(".circle4") ;
// console.log("HEllo");
   
  setTimeout(function(){
    circle0.style.left = `${details.clientX}px`
    circle0.style.top = `${details.clientY}px`
  } ,200)

  setTimeout(function(){
    circle1.style.left = `${details.clientX}px`
    circle1.style.top = `${details.clientY}px`
  } ,250)

  setTimeout(function(){
    circle2.style.left = `${details.clientX}px`
    circle2.style.top = `${details.clientY}px`
  } ,300)

  setTimeout(function(){
    circle3.style.left = `${details.clientX}px`
    circle3.style.top = `${details.clientY}px`
  } ,350)

  setTimeout(function(){
    circle4.style.left = `${details.clientX}px`
    circle4.style.top = `${details.clientY}px`
  } ,400)
})

//  document.querySelector(".minicircle").style.transform = `translate(${clientX}px ,${clientY}px) scale(${xscale} ,${yscale})`;
