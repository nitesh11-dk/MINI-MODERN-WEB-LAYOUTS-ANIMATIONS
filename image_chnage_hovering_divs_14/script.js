function selectAll(elem) {
    return document.querySelectorAll(elem)
}

function select(elem) {
    return document.querySelector(elem)
}


let elems = selectAll('img');


let box = select('.box')


document.addEventListener('mousemove', (e) => {
        

    gsap.to(box, {
        x: e.clientX,
        y: e.clientY,
        ease: "expo.easeInOut",
        duration: 0.5,
    })
    
})



selectAll('.container').forEach((elem) => {
    elem.addEventListener('mouseenter', (e ,idx) => { 
    
        let percent = elem.getAttribute('data-percent');
        gsap.to(elems, {
            y:percent,
            ease:"Power4.easeOut",
            duration: 1,
            delay:0.1 
            
        })
        gsap.to(box, {
            opacity: 1,
             ease:"Power4.easeOut"
   })

    })
    elem.addEventListener('mouseleave', (e ,idx) => { 
    
        let percent = elem.getAttribute('data-percent');
       
        gsap.to(box, {
            opacity: 0,
            ease:"Power4.easeOut",
   })

    })



})
 

// gsap.to(['.sdf' , '.fsjfs']) we can acces like this also 