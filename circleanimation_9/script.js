const circle = document.querySelector('.circle')
const frames = document.querySelectorAll('.frame')
const lerp = (x, y, a) => x * (1 - a) + y * a;

console.log(lerp(10 ,20 , 0.5))

frames.forEach( function(frame){

    frame.addEventListener('mousemove' ,function(detls){

        const dims =  frame.getBoundingClientRect()  // kisi vhi element ka dimension pata chal jayega 
        
        const xstart = dims.x ;
        
        const xend = dims.x + dims.width ; 
        
         const  mrange = gsap.utils.mapRange(xstart ,xend , 0 , 1 , detls.clientX)
        //  console.log(mr)
        
            gsap.to(circle ,{
                scale:8,
                duration:1
            })
        
            gsap.to(frame.children ,{
                color:'#fff' ,
                duration:0.4
            })
            gsap.to(frame.children ,{
                x:  lerp( -100 , 100 , mrange) ,
                y:'-5vw' ,
                ease:"elastic" ,
                duration:1
            })
        })
        
        frame.addEventListener('mouseleave' ,function(){
            gsap.to(circle ,{
                scale:1 ,
                duration:1
            })
            gsap.to(frame.children ,{
                color:'#000' ,
                duration:0.4
            })
            gsap.to(frame.children ,{
                x: 0 ,
                y:'0vw'
            })
           
        
            
        })

})






window.addEventListener('mousemove' , function(detls){
    gsap.to(circle ,{
        x:detls.clientX ,
        y:detls.clientY,
        duration:0.1 ,
        ease:Expo.easeInOut
    })
  
})

