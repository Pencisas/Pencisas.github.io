gsap.registerPlugin(ScrollTrigger);

/* cursor light */
document.addEventListener("mousemove",e=>{
  gsap.to("#cursor-light",{x:e.clientX,y:e.clientY,duration:.25});
});

/* subtle hover sound */
const hoverSound=new Audio("https://assets.mixkit.co/sfx/preview/mixkit-ui-hover-818.mp3");
hoverSound.volume=0.15;

document.querySelectorAll(".frame").forEach(f=>{
  f.addEventListener("mouseenter",()=>hoverSound.play());
});

/* swipers */
new Swiper(".cubedSwiper",{
  slidesPerView:3,
  centeredSlides:true,
  loop:true
});

new Swiper(".bikeSwiper",{
  slidesPerView:2,
  centeredSlides:true,
  loop:true
});

/* about cinematic lock */
ScrollTrigger.create({
  trigger:"#about",
  start:"top top",
  end:"+=100%",
  pin:true,
  scrub:true
});

/* mobs parallax */
gsap.from("#mobs .frame",{
  y:120,
  opacity:0,
  stagger:.2,
  scrollTrigger:{trigger:"#mobs",start:"top 70%"}
});

/* blades dramatic entry */
gsap.from(".blade-hero",{
  scale:.6,
  opacity:0,
  rotate:-10,
  scrollTrigger:{trigger:"#blades",start:"top 65%"}
});
