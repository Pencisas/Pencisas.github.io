<!-- ================= FONTS ================= -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;900&display=swap" rel="stylesheet">

<!-- ================= LIBRARIES ================= -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<style>
:root{
  --bg:#0B0F14;
  --panel:#0f172a;
  --border:#020617;
  --text:#9CA3AF;
  --accent:#38BDF8;
}

*{box-sizing:border-box;font-family:Inter,sans-serif}

body{
  margin:0;
  background:var(--bg);
  color:var(--text);
}

section{
  min-height:100vh;
  padding:110px 10%;
  border-bottom:1px solid var(--border);
  overflow:hidden;
}

h1,h2{
  color:#fff;
  font-weight:900;
  letter-spacing:-.04em;
}

p{max-width:720px}

/* ===== ABOUT ===== */
.about-glow{
  position:absolute;
  inset:-45%;
  background:radial-gradient(circle,var(--accent),transparent 70%);
  opacity:.1;
  filter:blur(150px);
  animation:floatGlow 20s infinite alternate;
}
@keyframes floatGlow{
  from{transform:translateY(-40px)}
  to{transform:translateY(40px)}
}

/* ===== FRAME ===== */
.frame{
  aspect-ratio:16/10;
  background:linear-gradient(180deg,#0f172a,#020617);
  border-radius:22px;
  border:1px solid #000;
  overflow:hidden;
  display:flex;
  align-items:center;
  justify-content:center;
}

.frame img{
  width:100%;
  height:100%;
  object-fit:contain;
  padding:20px;
}

/* ===== FLOAT ===== */
.float{
  animation:floatIdle 6s ease-in-out infinite;
}
@keyframes floatIdle{
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-14px)}
}

/* ===== SWIPER ===== */
.swiper{padding:90px 0}
.swiper-slide{transform:scale(.85);transition:.4s}
.swiper-slide-active{transform:scale(1)}
.hero .frame{
  box-shadow:0 0 90px rgba(56,189,248,.35);
}

/* ===== BUILDINGS ===== */
.build-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:28px;
}
.build-grid .frame{
  opacity:0;
  transform:translateY(40px) scale(.85);
}

/* ===== BLADE STACK ===== */
.blade-stack{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:28px;
}
.blade-stack .frame{
  opacity:0;
  transform:rotate(-8deg) scale(.7);
}
</style>

<!-- ================= ABOUT ================= -->
<section id="about">
  <div class="about-glow"></div>
  <h1>3D Modeler for Game Worlds</h1>
  <p>
    Low–mid poly Roblox specialist.  
    Blender & Substance Painter pipeline.  
    Worked on Mow ur Snow, Shatter Isles, and more.
  </p>
</section>

<!-- ================= CUBED ================= -->
<section id="cubed">
  <h2>▣ 3D Cubed Characters</h2>

  <div class="swiper cubedSwiper">
    <div class="swiper-wrapper">

      <div class="swiper-slide hero">
        <div class="frame float">
          <img src="images/cubed/SJW.jpg">
        </div>
      </div>

      <div class="swiper-slide"><div class="frame"><img src="images/cubed/Akaza.jpg"></div></div>
      <div class="swiper-slide"><div class="frame"><img src="images/cubed/Gyokko.jpg"></div></div>
      <div class="swiper-slide"><div class="frame"><img src="images/cubed/Gyomei.jpg"></div></div>
      <div class="swiper-slide"><div class="frame"><img src="images/cubed/Kokushibo.jpg"></div></div>
      <div class="swiper-slide"><div class="frame"><img src="images/cubed/Nezuko.jpg"></div></div>
      <div class="swiper-slide"><div class="frame"><img src="images/cubed/Glacgon.png"></div></div>
      <div class="swiper-slide"><div class="frame"><img src="images/cubed/Wolves.png"></div></div>
      <div class="swiper-slide"><div class="frame"><img src="images/cubed/krakenfinish.png"></div></div>

    </div>
  </div>
</section>

<!-- ================= MOBS ================= -->
<section id="mobs">
  <h2>◈ Mob & Boss Designs</h2>

  <div class="frame float" style="max-width:820px">
    <img id="mobHero" src="images/mobs/ElyenRender.png">
  </div>
</section>

<!-- ================= BUILDINGS ================= -->
<section id="buildings">
  <h2>▦ Building Assets</h2>

  <div class="build-grid">
    <div class="frame"><img src="images/buildings/narutorend.jpg"></div>
    <div class="frame"><img src="images/buildings/narutobldgs.jpg"></div>
    <div class="frame"><img src="images/buildings/Solo Leveling Buildings.png"></div>
  </div>
</section>

<!-- ================= BIKES ================= -->
<section id="bikes">
  <h2>▧ Motorcycles</h2>

  <div class="swiper bikeSwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide hero"><div class="frame float"><img src="images/bikes/gsxblue.png"></div></div>
      <div class="swiper-slide"><div class="frame"><img src="images/bikes/bmwblack.png"></div></div>
      <div class="swiper-slide"><div class="frame"><img src="images/bikes/bmwred.png"></div></div>
      <div class="swiper-slide"><div class="frame"><img src="images/bikes/enduro.webp"></div></div>
    </div>
  </div>
</section>

<!-- ================= BLADES ================= -->
<section id="blades">
  <h2>⟁ Blades</h2>

  <div class="blade-stack">
    <div class="frame"><img src="images/blades/Dagger.webp"></div>
    <div class="frame"><img src="images/blades/crescentrender.png"></div>
    <div class="frame"><img src="images/blades/renderprep.png"></div>
    <div class="frame"><img src="images/blades/tridentrender.png"></div>
  </div>
</section>

<!-- ================= CONTACT ================= -->
<section id="contact">
  <h2>Get In Touch</h2>
  <button onclick="navigator.clipboard.writeText('your@email.com')">Copy Email</button>
</section>

<script>
gsap.registerPlugin(ScrollTrigger);

new Swiper(".cubedSwiper",{slidesPerView:3,centeredSlides:true,loop:true});
new Swiper(".bikeSwiper",{slidesPerView:2,centeredSlides:true,loop:true});

gsap.from("#mobHero",{
  scale:.5,opacity:0,rotate:-6,
  scrollTrigger:{trigger:"#mobs",start:"top 70%"}
});

gsap.to(".build-grid .frame",{
  opacity:1,y:0,scale:1,stagger:.2,
  scrollTrigger:{trigger:"#buildings",start:"top 70%"}
});

gsap.to(".blade-stack .frame",{
  opacity:1,scale:1,rotate:0,stagger:.15,
  scrollTrigger:{trigger:"#blades",start:"top 70%"}
});
</script>
