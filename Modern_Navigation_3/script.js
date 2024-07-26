const  menus  = document.querySelector('#menu')
let main = document.querySelector('.main')
let main_box = document.querySelector('.main_box')
let close = document.querySelector('#close')
 
 
menus.addEventListener('click' , function(){
    //  alert('Wrking Bro !!!')
    main.style.transform = `  translateX(150px) scale(0.5) rotateY(-7deg) skewY(5deg)` ;
    main.style.filter = `blur(1.1px)` ;
    main_box.style.left= `0px` ;
})

close.addEventListener("click" , function(){
    main.style.transform = `translateX(0px) scale(1)` ;
    main.style.filter = `blur(0px)` ;
    main_box.style.left= `-300px`
})


