let circle = document.querySelector(".circle");

function cntspan() {
  let cntEffects = document.querySelectorAll(".cnteffect");

  cntEffects.forEach(function (cntEffect) {
    let span = document.createElement("span");

    span.innerText = cntEffect.innerText;

    cntEffect.innerText = "";

    cntEffect.appendChild(span);
  });
}

function loder() {
  let tl = gsap.timeline();

  tl.to(".innerelem", {
    height: "100%",
    duration: 1,
    stagger: 0.1,
    delay: 0.5,
  })
    .to(".main", {
      background: "#a5a4a4",
    })
    .to(".cntnumber h1 span", {
      opacity: 1,
    })
    .to(".contelem h2 span", {
      bottom: "0%",
      duration: 1,
      delay: -1,
    })
    .to(".cntnumber h1 span", {
      bottom: "0%",
      stagger: 0.8,
      duration: 1.5,
      opacity: 0,
      delay: -1,
    })
    .to(".contelem h2 span", {
        bottom: "100%",
        duration: 1,
        delay: -1,
      })
    .to(".innerelem", {
      width: "0%",
      duration: 0.4,
      stagger: 0.08,
      border: "none",
    })
    .to(".inner" ,{
        opacity:1 ,
        display:"block",
    })
    .to(".opac",{
        opacity:1 ,
        stagger:0.3 ,
        ease:Power2
    })
    .to(circle,{
        opacity:1 ,
       
    })
}


function textanimator() {
  let tags = document.querySelectorAll(".txt");

  tags.forEach(function (tag) {
    tag.addEventListener("mousemove", function () {
      gsap.to(".tag h1:nth-child(2n)", {
        top: "0%",
        opacity: 1,
      });
      gsap.to(".tag h1:nth-child(2n+1)", {
        top: "-100%",
        opacity: 0,
      });
    });

    tag.addEventListener("mouseleave", function () {
      gsap.to(".tag h1:nth-child(2n)", {
        top: "100%",
        opacity: 0,
      });
      gsap.to(".tag h1:nth-child(2n+1)", {
        top: "0%",
        opacity: 1,
      });
    });
  });
}
document.addEventListener("mousemove", function (detls) {
  gsap.to(circle, {
    left: detls.clientX,
    top: detls.clientY,
    ease: Power2,
    opacity: 1,
    scale: 0.2,
  });
});

function circlehover() {
  let hover = document.querySelectorAll(".hover");

  hover.forEach(function (h) {
    h.addEventListener("mousemove", function (detls) {
      gsap.to(circle, {
        ease: Power2,
        scale: 5,
      });
    });

    h.addEventListener("mouseleave", function (detls) {
      gsap.to(circle, {
        scale: 0.2,
      });
    });
  });
}

circlehover();
textanimator();
cntspan() ;
loder();
