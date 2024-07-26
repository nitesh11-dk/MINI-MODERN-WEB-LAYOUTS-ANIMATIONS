gsap.from(".main img", {
  opacity: 0,
  scale: 1.3,
  duration: 2,
  ease: "power2",
});

gsap.to(".main .img1", {
  delay: 2,
  y: -20,
  x: -23,
  duration: 2,
  yoyo: true,
  // ease: "power2",
  repeat: -1,
});
gsap.to(".main .img2", {
  delay: 2,
  y: 20,
  x: 23,
  duration: 2,
  yoyo: true,
  // ease: "power2",
  repeat: -1,
});

gsap.from(".mid-text", {
  opacity: 0,
  duration: 1,
  onStart: function () {
    $(".mid-text").textillate({
      in: { effect: "wobble" },
    });
  },
});

Shery.mouseFollower({
  
  skew: true,
  ease: "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
  duration: 1,
});

Shery.makeMagnet(".mid-text" /* Element to target.*/, {
  ease: "cubic-bezier(1, 1, 0.320, 1)",
  duration: 2,
});





let images = [
  "premium_photo-1673757121102-0ca51260861f.avif",
  "photo-1579493934830-eab45746b51b.avif",
  "p5.avif",
  "photo-1510867759970-3d2ca293be77.avif",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1613053341085-db794820ce43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1532332248682-206cc786359f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1565784796667-98515d255f7d?q=80&w=1907&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1554033842-d4f5ad6b1863?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

let image = document.querySelector(".img1");
let image1 = document.querySelector(".img2");

image.addEventListener("click", function () {
  let num = Math.floor(Math.random() * images.length);
  image.setAttribute("src", images[num]);
});

image1.addEventListener("click", function () {
  let num = Math.floor(Math.random() * images.length);
  image1.setAttribute("src", images[num]);
});
