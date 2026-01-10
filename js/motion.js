gsap.registerPlugin(ScrollTrigger);

/* CURSOR LIGHT */
document.addEventListener("mousemove",e=>{
  gsap.to("#light",{x:e.clientX,y:e.clientY,duration:.3});
});

/* FULLSCREEN VIEWER */
document.querySelectorAll(".zoom img").forEach(img=>{
  img.onclick=()=>{
    viewer.style.display="flex";
    viewerImg.src=img.src;
  }
});
viewer.onclick=()=>viewer.style.display="none";

/* ABOUT */
gsap.from("#about h1",{y:80,opacity:0,duration:1.6,ease:"power4.out"});

/* CUBED */
new Swiper(".cubedSwiper",{slidesPerView:3,centeredSlides:true,loop:true});
gsap.from("#cubed .swiper-slide",{scale:.7,opacity:0,stagger:.05,
  scrollTrigger:{trigger:"#cubed",start:"top 70%"}
});

/* MOBS */
gsap.from("#mobs .frame",{y:80,opacity:0,stagger:.2,
  scrollTrigger:{trigger:"#mobs",start:"top 70%"}
});

/* BUILDINGS */
gsap.from("#buildings .frame",{y:120,scale:.8,opacity:0,stagger:.25,
  scrollTrigger:{trigger:"#buildings",start:"top 70%"}
});

/* BIKES */
new Swiper(".bikeSwiper",{slidesPerView:2,centeredSlides:true,loop:true});

/* BLADES */
gsap.from("#blades .frame",{rotate:-15,scale:.6,opacity:0,stagger:.15,
  scrollTrigger:{trigger:"#blades",start:"top 70%"}
});
