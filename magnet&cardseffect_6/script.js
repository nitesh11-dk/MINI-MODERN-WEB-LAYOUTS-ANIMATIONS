const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function cardShow() {
  document.querySelectorAll(".imgg").forEach(function (container) {
    container.addEventListener("mousemove", function (details) {
      document.querySelector(".mouse_follower").style.opacity = 1;
      document.querySelector(
        ".mouse_follower"
      ).style.transform = `translate(${details.clientX}px ,${details.clientY}px)`;
    });

    container.addEventListener("mouseleave", function (details) {
      document.querySelector(".mouse_follower").style.opacity = 0;
      document.querySelector(
        ".mouse_follower"
      ).style.transform = `translate(${details.clientX}px ,${details.clientY}px)`;
    });
  });
}

let tl = gsap.timeline();
tl.from(".img_cntnr", {
  x: 0,
  y: 0,
  rotate: 0,
  duration: 2.5,
  ease: "elastic",
});

function makeMagnet() {
  Shery.makeMagnet(".magnet", {
    ease: "elastic",
    duration: 1,
  });
}

makeMagnet();
cardShow();
