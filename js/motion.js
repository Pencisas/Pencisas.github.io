gsap.registerPlugin(ScrollTrigger);

/* ABOUT — ambient intro */
gsap.from("#about h1",{
  y:80,opacity:0,duration:1.6,ease:"power4.out"
});

/* CUBED — snappy geometric motion */
new Swiper(".cubedSwiper",{slidesPerView:3,centeredSlides:true,loop:true});

/* MOBS — heavy cinematic */
gsap.from(".mob-hero",{
  scale:.6,rotate:-6,opacity:0,
  scrollTrigger:{trigger:"#mobs",start:"top 70%"}
});

gsap.from("#mobs .mob-grid .frame",{
  y:60,opacity:0,stagger:.2,
  scrollTrigger:{trigger:"#mobs",start:"top 60%"}
});

/* BUILDINGS — assembly effect */
gsap.from("#buildings .frame",{
  y:80,opacity:0,scale:.85,stagger:.25,
  scrollTrigger:{trigger:"#buildings",start:"top 70%"}
});

/* BIKES — velocity & glide */
new Swiper(".bikeSwiper",{slidesPerView:2,centeredSlides:true,loop:true});

/* BLADES — impact & recoil */
gsap.from("#blades .frame",{
  rotate:-14,scale:.6,opacity:0,stagger:.15,
  scrollTrigger:{trigger:"#blades",start:"top 70%"}
});
