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
  --panel:#111827;
  --border:#1F2937;
  --text:#9CA3AF;
  --accent:#38BDF8;
}

* { box-sizing:border-box; font-family:Inter,sans-serif; }

body {
  margin:0;
  background:var(--bg);
  color:var(--text);
}

section {
  min-height:100vh;
  padding:100px 10%;
  position:relative;
  overflow:hidden;
  border-bottom:1px solid var(--border);
}

h1,h2 {
  color:white;
  font-weight:900;
  letter-spacing:-0.04em;
}

p { max-width:700px; }

/* ===== ABOUT ===== */
.about-glow {
  position:absolute;
  inset:-50%;
  background:radial-gradient(circle, var(--accent), transparent 70%);
  opacity:0.15;
  filter:blur(120px);
}

/* ===== SWIPER ===== */
.swiper {
  width:100%;
  padding:60px 0;
}

.swiper-slide {
  background:var(--panel);
  border-radius:18px;
  overflow:hidden;
  border:1px solid var(--border);
  transform:scale(0.8);
}

.swiper-slide img {
  width:100%;
  display:block;
}

/* HERO SLIDE */
.swiper-slide.hero {
  transform:scale(1);
  box-shadow:0 0 60px rgba(56,189,248,.25);
}

/* ===== BUILD GRID ===== */
.build-grid {
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
}

.build-grid img {
  width:100%;
  border-radius:14px;
  opacity:0;
  transform:scale(0.6);
}

/* ===== BLADE MASK ===== */
.slash {
  clip-path:polygon(0 50%,100% 50%,100% 52%,0 52%);
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
        <img src="images/cubed/SJW.jpg" alt="Cubed Character Hero">
      </div>
      <div class="swiper-slide">
        <img src="images/cubed/Akaza.jpg" alt="Akaza">
      </div>
      <div class="swiper-slide">
        <img src="images/cubed/Gyokko.jpg" alt="Gyokko">
      </div>
      <div class="swiper-slide">
        <img src="images/cubed/Gyomei.jpg" alt="Gyomei">
      </div>
      <div class="swiper-slide">
        <img src="images/cubed/Kokushibo.jpg" alt="Kokushibo">
      </div>
      <div class="swiper-slide">
        <img src="images/cubed/Nezuko.jpg" alt="Nezuko">
      </div>
      <div class="swiper-slide">
        <img src="images/cubed/Glacgon.png" alt="Glacgon">
      </div>
      <div class="swiper-slide">
        <img src="images/cubed/Wolves.png" alt="Wolves">
      </div>
      <div class="swiper-slide">
        <img src="images/cubed/krakenfinish.png" alt="Kraken">
      </div>
    </div>
  </div>
</section>


<!-- ================= MOBS ================= -->
<section id="mobs">
  <h2>◈ Mob & Boss Designs</h2>
  <img id="mobHero" src="MOB_HERO.png" style="width:60%;border-radius:24px;">
</section>

<!-- ================= BUILDINGS ================= -->
<section id="buildings">
  <h2>▦ Building Assets</h2>
  <div class="build-grid">
    <img src="BUILD_1.png">
    <img src="BUILD_2.png">
    <img src="BUILD_3.png">
    <img src="BUILD_4.png">
    <img src="BUILD_5.png">
    <img src="BUILD_6.png">
  </div>
</section>

<!-- ================= BLADES ================= -->
<section id="blades">
  <h2>⟁ Blades</h2>
  <img class="slash" src="BLADE_HERO.png" style="width:60%;">
</section>

<!-- ================= CONTACT ================= -->
<section id="contact">
  <h2>Get In Touch</h2>
  <button onclick="navigator.clipboard.writeText('your@email.com')">Copy Email</button>
</section>

<script>
gsap.registerPlugin(ScrollTrigger);

/* ABOUT */
gsap.from("#about h1", {
  y:100, opacity:0, duration:1.5
});

/* CUBED CAROUSEL */
new Swiper(".cubedSwiper", {
  slidesPerView:3,
  centeredSlides:true,
  loop:true
});

/* MOB DRAMATIC ZOOM */
gsap.from("#mobHero", {
  scale:0.3,
  opacity:0,
  rotate:-10,
  scrollTrigger:{
    trigger:"#mobs",
    start:"top 70%"
  }
});

/* BUILD ASSEMBLY */
gsap.to(".build-grid img", {
  opacity:1,
  scale:1,
  stagger:0.15,
  scrollTrigger:{
    trigger:"#buildings",
    start:"top 70%"
  }
});

/* BLADE SLASH */
gsap.to(".slash", {
  clipPath:"polygon(0 0,100% 0,100% 100%,0 100%)",
  duration:1,
  scrollTrigger:{
    trigger:"#blades",
    start:"top 75%"
  }
});
</script>
