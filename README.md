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
:root {
  --bg:#0B0F14;
  --panel:#020617;
  --border:#000000;
  --text:#9CA3AF;
  --accent:#38BDF8;
}

* { box-sizing:border-box; font-family:Inter,sans-serif; }

body {
  margin:0;
  background:var(--bg);
  color:var(--text);
}

/* ===== SECTIONS ===== */
section {
  min-height:100vh;
  padding:110px 10%;
  position:relative;
  overflow:hidden;
  border-bottom:1px solid #020617;
}

h1,h2 {
  color:white;
  font-weight:900;
  letter-spacing:-0.04em;
}

p {
  max-width:720px;
  line-height:1.6;
}

/* ===== ABOUT ===== */
.about-glow {
  position:absolute;
  inset:-50%;
  background:radial-gradient(circle, var(--accent), transparent 65%);
  opacity:.10;
  filter:blur(160px);
  animation: slowDrift 18s infinite alternate ease-in-out;
}

@keyframes slowDrift {
  from { transform:translateY(-60px); }
  to   { transform:translateY(60px); }
}

/* ===== IMAGE FRAME (GLOBAL) ===== */
.frame {
  width:100%;
  aspect-ratio:16/9;
  background:#020617;
  border-radius:26px;
  border:1px solid var(--border);
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
  box-shadow:
    inset 0 0 60px rgba(0,0,0,.9),
    0 30px 80px rgba(0,0,0,.6);
}

.frame img {
  width:100%;
  height:100%;
  object-fit:contain;
  padding:6px;
}

/* ===== HERO FRAME ===== */
.hero .frame {
  aspect-ratio:16/8;
  box-shadow:
    0 0 120px rgba(56,189,248,.35),
    inset 0 0 80px rgba(0,0,0,.9);
}

/* ===== FLOAT MOTION ===== */
.float {
  animation: floatIdle 6s ease-in-out infinite;
}

@keyframes floatIdle {
  0%,100% { transform:translateY(0); }
  50% { transform:translateY(-20px); }
}

/* ===== SWIPER ===== */
.swiper {
  width:100%;
  padding:90px 0;
}

.swiper-slide {
  transition:transform .5s ease, opacity .5s ease;
  opacity:.45;
  transform:scale(.75);
}

.swiper-slide-active {
  opacity:1;
  transform:scale(1);
}

/* ===== BUILD GRID ===== */
.build-grid {
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
  gap:36px;
}

.build-grid .frame {
  opacity:0;
  transform:translateY(60px) scale(.85);
}

/* ===== BUTTON ===== */
button {
  background:#020617;
  border:1px solid #000;
  color:var(--text);
  padding:14px 22px;
  border-radius:14px;
  cursor:pointer;
}

button:hover {
  color:white;
  border-color:var(--accent);
}
</style>

<!-- ================= ABOUT ================= -->
<section id="about">
  <div class="about-glow"></div>
  <h1>3D Modeler for Game Worlds</h1>
  <p>
    Specialized in low–mid poly Roblox assets.
    Blender & Substance Painter workflow.
    Contributor to Mow ur Snow, Shatter Isles, and more.
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

  <div class="frame hero float" style="max-width:900px;margin:auto;">
    <img id="mobHero" src="images/mobs/Muzan.jpg">
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

      <div class="swiper-slide hero">
        <div class="frame float"><img src="images/bikes/enduro.webp"></div>
      </div>

      <div class="swiper-slide"><div class="frame"><img src="images/bikes/bmwblack.png"></div></div>
      <div class="swiper-slide"><div class="frame"><img src="images/bikes/bmwred.png"></div></div>
      <div class="swiper-slide"><div class="frame"><img src="images/bikes/gsxblue.png"></div></div>

    </div>
  </div>
</section>

<!-- ================= BLADES ================= -->
<section id="blades">
  <h2>⟁ Blades</h2>

  <div class="frame hero float" style="max-width:900px;margin:auto;">
    <img src="images/blades/Dagger.webp">
  </div>
</section>

<!-- ================= CONTACT ================= -->
<section id="contact">
  <h2>Get In Touch</h2>
  <button onclick="navigator.clipboard.writeText('your@email.com')">
    Copy Email
  </button>
</section>

<script>
gsap.registerPlugin(ScrollTrigger);

/* ABOUT */
gsap.from("#about h1", {
  y:140,
  opacity:0,
  duration:1.6,
  ease:"power3.out"
});

/* SWIPERS */
new Swiper(".cubedSwiper", {
  slidesPerView:2.2,
  centeredSlides:true,
  loop:true,
  spaceBetween:50
});

new Swiper(".bikeSwiper", {
  slidesPerView:2,
  centeredSlides:true,
  loop:true,
  spaceBetween:50
});

/* MOB HERO */
gsap.from("#mobHero", {
  scale:.5,
  rotate:-10,
  opacity:0,
  duration:1.2,
  ease:"power3.out",
  scrollTrigger:{ trigger:"#mobs", start:"top 70%" }
});

/* BUILDINGS */
gsap.to(".build-grid .frame", {
  opacity:1,
  y:0,
  scale:1,
  stagger:.25,
  ease:"power3.out",
  scrollTrigger:{ trigger:"#buildings", start:"top 70%" }
});
</script>
