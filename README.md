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
  inset:-40%;
  background:radial-gradient(circle, var(--accent), transparent 70%);
  opacity:0.12;
  filter:blur(140px);
  animation: slowFloat 20s infinite alternate;
}

@keyframes slowFloat {
  from { transform:translateY(-40px); }
  to { transform:translateY(40px); }
}

/* ===== IMAGE FRAME (UNIVERSAL) ===== */
.frame {
  aspect-ratio:16/10;
  background:linear-gradient(180deg,#0f172a,#020617);
  border-radius:20px;
  border:1px solid var(--border);
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
}

.frame img {
  width:100%;
  height:100%;
  object-fit:contain;
  padding:18px;
}

/* ===== SWIPER ===== */
.swiper {
  width:100%;
  padding:80px 0;
}

.swiper-slide {
  transform:scale(0.8);
  transition:transform .4s ease;
}

.swiper-slide-active {
  transform:scale(1);
}

/* HERO GLOW */
.hero .frame {
  box-shadow:0 0 80px rgba(56,189,248,.3);
}

/* ===== BUILD GRID ===== */
.build-grid {
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:26px;
}

.build-grid .frame {
  opacity:0;
  transform:translateY(40px) scale(.85);
}

/* ===== FLOATING MOTION ===== */
.float {
  animation: floatIdle 6s ease-in-out infinite;
}

@keyframes floatIdle {
  0%,100% { transform:translateY(0); }
  50% { transform:translateY(-14px); }
}

/* ===== BLADE SLASH ===== */
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

  <div class="frame float" style="max-width:700px">
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
      <div class="swiper-slide hero"><div class="frame float"><img src="images/bikes/enduro.webp"></div></div>
      <div class="swiper-slide"><div class="frame"><img src="images/bikes/bmwblack.png"></div></div>
      <div class="swiper-slide"><div class="frame"><img src="images/bikes/bmwred.png"></div></div>
      <div class="swiper-slide"><div class="frame"><img src="images/bikes/gsxblue.png"></div></div>
    </div>
  </div>
</section>

<!-- ================= BLADES ================= -->
<section id="blades">
  <h2>⟁ Blades</h2>

  <div class="frame slash" style="max-width:700px">
    <img src="images/blades/Dagger.webp">
  </div>
</section>

<!-- ================= CONTACT ================= -->
<section id="contact">
  <h2>Get In Touch</h2>
  <button onclick="navigator.clipboard.writeText('your@email.com')">Copy Email</button>
</section>

<script>
gsap.registerPlugin(ScrollTrigger);

/* ABOUT */
gsap.from("#about h1", { y:120, opacity:0, duration:1.5 });

/* SWIPERS */
new Swiper(".cubedSwiper", { slidesPerView:3, centeredSlides:true, loop:true });
new Swiper(".bikeSwiper", { slidesPerView:2, centeredSlides:true, loop:true });

/* MOB */
gsap.from("#mobHero", {
  scale:.4,
  rotate:-8,
  opacity:0,
  scrollTrigger:{ trigger:"#mobs", start:"top 70%" }
});

/* BUILDINGS */
gsap.to(".build-grid .frame", {
  opacity:1,
  y:0,
  scale:1,
  stagger:.2,
  scrollTrigger:{ trigger:"#buildings", start:"top 70%" }
});

/* BLADE SLASH */
gsap.to(".slash", {
  clipPath:"polygon(0 0,100% 0,100% 100%,0 100%)",
  duration:1,
  scrollTrigger:{ trigger:"#blades", start:"top 75%" }
});
</script>
