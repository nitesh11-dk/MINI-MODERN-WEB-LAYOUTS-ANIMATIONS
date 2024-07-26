var tl = gsap.timeline({
    repeat:-1
});


 

tl.to('.image_container',{


    width:'100%',
    ease:Expo.easeInOut ,
    stagger:2
} , 'a')

.to('.text h1',{

    // delay:2 ,
    ease:Expo.easeInOut ,
    stagger:2,
    top:60,
}, 'a')

.to('.text h1',{

    delay:2 ,
    ease:Expo.easeInOut ,
    stagger:2,
    top:"-200",
    
}, 'a')





//  gsap.to("", {} , 'flag') // jiska jiska flag ka nam same hoga vo same time pe animate hoga 