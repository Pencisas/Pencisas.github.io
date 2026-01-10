<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>3D Modeler | Next-Gen Portfolio</title>
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <!-- ================= FONTS ================= -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;900&family=Space+Grotesk:wght@300;500;700&family=Syne:wght@400;800&display=swap" rel="stylesheet">

  <!-- ================= LIBRARIES ================= -->
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

  <style>
  /* ==========================================================
     0. RESET & TOKENS
  ========================================================== */
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;font-family:Inter,sans-serif;}
  :root{
    --bg:#0B0F14;
    --panel:#020617;
    --border:#000000;
    --text:#9CA3AF;
    --accent:#38BDF8;
    --purple:#8B5CF6;
    --pink:#EC4899;
    --cyan:#22D3EE;
    --orange:#F97316;
    --yellow:#FBBF24;
    --lime:#84CC16;
    --font1:'Inter',sans-serif;
    --font2:'Space Grotesk',sans-serif;
    --font3:'Syne',sans-serif;
  }
  html{scroll-behavior:smooth;}
  body{background:var(--bg);color:var(--text);overflow-x:hidden;}

  /* ==========================================================
     1. GLOBAL HELPERS
  ========================================================== */
  .abs-center{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}
  .fw-900{font-weight:900;}
  .font1{font-family:var(--font1);}
  .font2{font-family:var(--font2);}
  .font3{font-family:var(--font3);}
  .glass{
    backdrop-filter:blur(12px);
    -webkit-backdrop-filter:blur(12px);
    background:rgba(2,6,23,.55);
    border:1px solid rgba(255,255,255,.07);
  }

  /* ==========================================================
     2. SECTION SHELL
  ========================================================== */
  section{
    min-height:100vh;
    padding:110px 8%;
    position:relative;
    overflow:hidden;
    border-bottom:1px solid rgba(255,255,255,.04);
  }
  h1,h2,h3{letter-spacing:-.04em;line-height:1.1;}
  p{max-width:720px;line-height:1.7;font-size:1.05rem;}

  /* ==========================================================
     3. HERO / ABOUT
  ========================================================== */
  #about{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
  }
  #about h1{
    font-size:clamp(3rem,10vw,6rem);
    font-family:var(--font3);
    color:#fff;
    margin-bottom:.5em;
    position:relative;
    z-index:2;
  }
  #about p{
    font-size:clamp(1.1rem,2vw,1.4rem);
    color:var(--text);
    position:relative;
    z-index:2;
  }
  .about-glow{
    position:absolute;
    inset:-50%;
    background:radial-gradient(circle at 30% 30%,var(--accent),transparent 65%);
    opacity:.12;
    filter:blur(180px);
    animation:slowDrift 20s infinite alternate ease-in-out;
  }
  @keyframes slowDrift{
    from{transform:translateY(-80px);}
    to{transform:translateY(80px);}
  }

  /* ==========================================================
     4. CUBED CHARACTERS – SWIPER CINEMA
  ========================================================== */
  #cubed{background:#000;}
  #cubed h2{
    font-size:clamp(2.2rem,6vw,4rem);
    font-family:var(--font2);
    color:#fff;
    margin-bottom:2rem;
    text-align:center;
  }
  .cubedSwiper{width:100%;padding:100px 0;}
  .cubedSwiper .swiper-slide{
    position:relative;
    overflow:hidden;
    border-radius:24px;
    transform:scale(.7);
    opacity:.4;
    transition:transform .6s ease,opacity .6s ease;
  }
  .cubedSwiper .swiper-slide-active{
    transform:scale(1);
    opacity:1;
  }
  .cubedSwiper .swiper-slide img{
    width:100%;height:100%;object-fit:cover;
    transition:transform 1s ease;
  }
  .cubedSwiper .swiper-slide-active img{transform:scale(1.08);}
  .cubedSwiper .swiper-slide::after{
    content:'';
    position:absolute;inset:0;
    background:linear-gradient(to top,rgba(0,0,0,.8) 0%,transparent 50%);
  }
  .slide-info{
    position:absolute;bottom:30px;left:30px;z-index:3;
    color:#fff;
  }
  .slide-info h3{font-size:1.8rem;margin-bottom:.3em;}
  .slide-info span{
    display:inline-block;
    padding:6px 14px;
    background:var(--accent);
    color:#000;
    border-radius:20px;
    font-weight:600;
    font-size:.85rem;
  }

  /* ==========================================================
     5. MOBS – PARALLAX HERO
  ========================================================== */
  #mobs{background:#0d0d0d;}
  #mobs h2{
    font-size:clamp(2.2rem,6vw,4rem);
    font-family:var(--font3);
    color:#fff;
    margin-bottom:3rem;
    text-align:center;
  }
  .mob-showcase{
    position:relative;
    max-width:900px;margin:auto;
    aspect-ratio:16/9;
    border-radius:30px;
    overflow:hidden;
    box-shadow:0 0 120px rgba(139,92,246,.35);
  }
  .mob-showcase img{
    width:100%;height:100%;object-fit:cover;
    transform:scale(1.15);
    transition:transform 1.2s ease;
  }
  .mob-showcase:hover img{transform:scale(1.05);}
  .mob-tag{
    position:absolute;bottom:30px;left:30px;
    background:var(--purple);
    color:#fff;
    padding:10px 24px;
    border-radius:30px;
    font-weight:600;
    font-size:1rem;
  }

  /* ==========================================================
     6. BUILDINGS – GRID MASONRY
  ========================================================== */
  #buildings{background:#020617;}
  #buildings h2{
    font-size:clamp(2.2rem,6vw,4rem);
    font-family:var(--font2);
    color:#fff;
    margin-bottom:3rem;
    text-align:center;
  }
  .build-masonry{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:24px;
  }
  .build-card{
    position:relative;
    border-radius:20px;
    overflow:hidden;
    background:#000;
    transform-style:preserve-3d;
    transition:transform .4s ease;
  }
  .build-card img{
    width:100%;height:100%;object-fit:cover;
    transition:transform .6s ease;
  }
  .build-card:hover{transform:rotateX(5deg) rotateY(-5deg) translateZ(20px);}
  .build-card:hover img{transform:scale(1.08);}
  .build-label{
    position:absolute;bottom:20px;left:20px;
    background:var(--orange);
    color:#000;
    padding:8px 18px;
    border-radius:20px;
    font-weight:600;
    font-size:.9rem;
  }

  /* ==========================================================
     7. BIKES – HORIZONTAL SLIDER
  ========================================================== */
  #bikes{background:#0a0a0a;}
  #bikes h2{
    font-size:clamp(2.2rem,6vw,4rem);
    font-family:var(--font3);
    color:#fff;
    margin-bottom:3rem;
    text-align:center;
  }
  .bikeSwiper{padding:80px 0;}
  .bikeSwiper .swiper-slide{
    border-radius:24px;
    overflow:hidden;
    opacity:.5;
    transform:scale(.85);
    transition:transform .5s ease,opacity .5s ease;
  }
  .bikeSwiper .swiper-slide-active{
    opacity:1;
    transform:scale(1);
  }
  .bikeSwiper img{width:100%;height:100%;object-fit:cover;}

  /* ==========================================================
     8. BLADES – 3D TILT CARD
  ========================================================== */
  #blades{background:#000;}
  #blades h2{
    font-size:clamp(2.2rem,6vw,4rem);
    font-family:var(--font2);
    color:#fff;
    margin-bottom:3rem;
    text-align:center;
  }
  .blade-stage{
    perspective:1200px;
    max-width:900px;margin:auto;
  }
  .blade-card{
    width:100%;aspect-ratio:16/9;
    border-radius:30px;
    overflow:hidden;
    transform-style:preserve-3d;
    transition:transform .6s ease;
  }
  .blade-card img{
    width:100%;height:100%;object-fit:cover;
  }

  /* ==========================================================
     9. CONTACT – GLASS BUTTON
  ========================================================== */
  #contact{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
  }
  #contact h2{
    font-size:clamp(2.2rem,6vw,4rem);
    font-family:var(--font3);
    color:#fff;
    margin-bottom:2rem;
  }
  .copy-btn{
    background:transparent;
    border:2px solid var(--accent);
    color:var(--accent);
    padding:16px 40px;
    border-radius:30px;
    font-size:1.1rem;
    font-weight:600;
    cursor:pointer;
    transition:all .3s ease;
  }
  .copy-btn:hover{
    background:var(--accent);
    color:#000;
    box-shadow:0 0 40px var(--accent);
  }

  /* ==========================================================
     10. ANIMATIONS
  ========================================================== */
  .fade-up{
    opacity:0;
    transform:translateY(60px);
  }
  </style>
</head>
<body>

<!-- ==========================================================
     1. ABOUT
========================================================== -->
<section id="about">
  <div class="about-glow"></div>
  <h1 class="fade-up font3">3D Modeler for Game Worlds</h1>
  <p class="fade-up">
    Specialized in low–mid poly Roblox assets. Blender & Substance Painter workflow. Contributor to <em>Mow ur Snow</em>, <em>Shatter Isles</em>, and more.
  </p>
</section>

<!-- ==========================================================
     2. CUBED CHARACTERS
========================================================== -->
<section id="cubed">
  <h2 class="fade-up font2">▣ 3D Cubed Characters</h2>
  <div class="swiper cubedSwiper">
    <div class="swiper-wrapper">
      <!-- slide -->
      <div class="swiper-slide">
        <img src="https://source.unsplash.com/1600x900/?anime,character" alt="">
        <div class="slide-info">
          <h3>Storm Shinobi</h3>
          <span>Low-Poly</span>
        </div>
      </div>
      <!-- repeat -->
      <div class="swiper-slide">
        <img src="https://source.unsplash.com/1600x900/?cyberpunk,character" alt="">
        <div class="slide-info">
          <h3>Gyokko Demon</h3>
          <span>Mid-Poly</span>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="https://source.unsplash.com/1600x900/?samurai,character" alt="">
        <div class="slide-info">
          <h3>Kokushibo</h3>
          <span>High-Poly</span>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="https://source.unsplash.com/1600x900/?demon,anime" alt="">
        <div class="slide-info">
          <h3>Nezuko</h3>
          <span>Low-Poly</span>
        </div>
      </div>
      <div class="swiper-slide">
        <img src="https://source.unsplash.com/1600x900/?dragon,character" alt="">
        <div class="slide-info">
          <h3>Glacgon</h3>
          <span>Mid-Poly</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ==========================================================
     3. MOBS
========================================================== -->
<section id="mobs">
  <h2 class="fade-up font3">◈ Mob & Boss Designs</h2>
  <div class="mob-showcase fade-up">
    <img id="mobHero" src="https://source.unsplash.com/1600x900/?boss,monster" alt="">
    <div class="mob-tag">Muzan Final Form</div>
  </div>
</section>

<!-- ==========================================================
     4. BUILDINGS
========================================================== -->
<section id="buildings">
  <h2 class="fade-up font2">▦ Building Assets</h2>
  <div class="build-masonry">
    <div class="build-card fade-up">
      <img src="https://source.unsplash.com/1600x900/?japanese,building" alt="">
      <div class="build-label">Naruto Village</div>
    </div>
    <div class="build-card fade-up">
      <img src="https://source.unsplash.com/1600x900/?future,city" alt="">
      <div class="build-label">Solo Leveling City</div>
    </div>
    <div class="build-card fade-up">
      <img src="https://source.unsplash.com/1600x900/?castle,anime" alt="">
      <div class="build-label">Medieval Castle</div>
    </div>
    <div class="build-card fade-up">
      <img src="https://source.unsplash.com/1600x900/?cyberpunk,building" alt="">
      <div class="build-label">Cyberpunk Tower</div>
    </div>
  </div>
</section>

<!-- ==========================================================
     5. BIKES
========================================================== -->
<section id="bikes">
  <h2 class="fade-up font3">▧ Motorcycles</h2>
  <div class="swiper bikeSwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="https://source.unsplash.com/1600x900/?motorcycle,dirt" alt=""></div>
      <div class="swiper-slide"><img src="https://source.unsplash.com/1600x900/?bmw,motorcycle" alt=""></div>
      <div class="swiper-slide"><img src="https://source.unsplash.com/1600x900/?sport,motorcycle" alt=""></div>
      <div class="swiper-slide"><img src="https://source.unsplash.com/1600x900/?race,motorcycle" alt=""></div>
    </div>
  </div>
</section>

<!-- ==========================================================
     6. BLADES
========================================================== -->
<section id="blades">
  <h2 class="fade-up font2">⟁ Blades</h2>
  <div class="blade-stage fade-up">
    <div class="blade-card">
      <img src="https://source.unsplash.com/1600x900/?katana,sword" alt="">
    </div>
  </div>
</section>

<!-- ==========================================================
     7. CONTACT
========================================================== -->
<section id="contact">
  <h2 class="fade-up font3">Get In Touch</h2>
  <button class="copy-btn fade-up" onclick="copyEmail()">Copy Email</button>
</section>

<!-- ==========================================================
     8. JAVASCRIPT
========================================================== -->
<script>
gsap.registerPlugin(ScrollTrigger);

/* ------------ utility ------------ */
function copyEmail(){
  navigator.clipboard.writeText('your@email.com');
  gsap.to('.copy-btn',{scale:.9,duration:.1,yoyo:true,repeat:1});
}

/* ------------ global fade-up ------------ */
gsap.utils.toArray('.fade-up').forEach(el=>{
  gsap.from(el,{
    y:80,
    opacity:0,
    duration:1.2,
    ease:'power3.out',
    scrollTrigger:{
      trigger:el,
      start:'top 85%',
      toggleActions:'play none none reverse'
    }
  });
});

/* ------------ swipers ------------ */
new Swiper('.cubedSwiper',{
  slidesPerView:1.2,
  centeredSlides:true,
  spaceBetween:30,
  loop:true,
  speed:800,
  autoplay:{delay:4000,disableOnInteraction:false},
  breakpoints:{
    768:{slidesPerView:1.8},
    1024:{slidesPerView:2.4}
  }
});

new Swiper('.bikeSwiper',{
  slidesPerView:1.3,
  centeredSlides:true,
  spaceBetween:40,
  loop:true,
  speed:700,
  autoplay:{delay:3500,disableOnInteraction:false},
  breakpoints:{
    768:{slidesPerView:2},
    1024:{slidesPerView:2.6}
  }
});

/* ------------ mob parallax ------------ */
gsap.to('#mobHero',{
  yPercent:-25,ease:'none',
  scrollTrigger:{trigger:'#mobs',start:'top bottom',end:'bottom top',scrub:true}
});

/* ------------ blade tilt ------------ */
const bladeCard=document.querySelector('.blade-card');
bladeCard.addEventListener('mousemove',(e)=>{
  const {left,top,width,height}=bladeCard.getBoundingClientRect();
  const x=(e.clientX-left)/width-.5;
  const y=(e.clientY-top)/height-.5;
  gsap.to(bladeCard,{rotationY:x*25,rotationX:-y*25,transformPerspective:1200,ease:'power2.out'});
});
bladeCard.addEventListener('mouseleave',()=>{
  gsap.to(bladeCard,{rotationX:0,rotationY:0});
});
</script>
</body>
</html>
