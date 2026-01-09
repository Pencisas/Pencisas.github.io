<!-- ================= FONT ================= -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">

<style>
:root {
  --bg: #0B0F14;
  --panel: #121826;
  --border: #1F2937;
  --text: #9CA3AF;
  --accent: #60A5FA;
}

* {
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

body {
  background: var(--bg);
  color: var(--text);
  margin: 0;
}

section {
  min-height: 100vh;
  padding: 80px 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  border-bottom: 1px solid var(--border);
}

h1, h2 {
  color: white;
  font-weight: 800;
  letter-spacing: -0.03em;
}

p {
  max-width: 700px;
  line-height: 1.6;
}

.fade {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s ease;
}

.fade.show {
  opacity: 1;
  transform: translateY(0);
}

/* ===== GALLERY ===== */
.gallery {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;
}

.gallery img {
  width: 100%;
  border-radius: 12px;
  border: 1px solid var(--border);
  transition: transform 0.4s ease;
}

.gallery img:hover {
  transform: scale(1.05);
}

/* ===== HERO IMAGE ===== */
.hero {
  grid-row: span 2;
}

/* ===== BUTTONS ===== */
button {
  background: none;
  border: 1px solid var(--border);
  color: var(--text);
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* ===== TOP BUTTON ===== */
#topBtn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: none;
}
</style>

<!-- ================= ABOUT ================= -->
<section class="fade">
  <h1>3D Modeler — Game-Ready Assets</h1>
  <p>
    I am a 3D modeler with several years of experience creating low-to-mid poly assets for Roblox games.
    I specialize in optimized models textured in Blender and Substance Painter.
    <br><br>
    I've contributed to games such as <b>Mow ur Snow</b>, <b>Shatter Isles</b>, and more.
  </p>
</section>

<!-- ================= CUBED CHARACTERS ================= -->
<section class="fade">
  <h2>▣ 3D Cubed Characters</h2>
  <p>Stylized, readable, and optimized for gameplay.</p>

  <div class="gallery">
    <img class="hero" src="IMAGE_HERO_CUBE.png">
    <img src="IMAGE_CUBE_1.png">
    <img src="IMAGE_CUBE_2.png">
    <img src="IMAGE_CUBE_3.png">
  </div>
</section>

<!-- ================= MOBS ================= -->
<section class="fade">
  <h2>◈ Mob & Boss Designs</h2>
  <p>Designed for combat readability and personality.</p>

  <div class="gallery">
    <img class="hero" src="IMAGE_HERO_MOB.png">
    <img src="IMAGE_MOB_1.png">
    <img src="IMAGE_MOB_2.png">
    <img src="IMAGE_MOB_3.png">
  </div>
</section>

<!-- ================= BUILDINGS ================= -->
<section class="fade">
  <h2>▦ Building Assets</h2>
  <p>Modular structures optimized for large worlds.</p>

  <div class="gallery">
    <img class="hero" src="IMAGE_HERO_BUILDING.png">
    <img src="IMAGE_BUILD_1.png">
    <img src="IMAGE_BUILD_2.png">
    <img src="IMAGE_BUILD_3.png">
  </div>
</section>

<!-- ================= MOTORCYCLES ================= -->
<section class="fade">
  <h2>▧ Motorcycles</h2>
  <p>Stylized vehicles with clean topology.</p>

  <div class="gallery">
    <img class="hero" src="IMAGE_HERO_BIKE.png">
    <img src="IMAGE_BIKE_1.png">
    <img src="IMAGE_BIKE_2.png">
    <img src="IMAGE_BIKE_3.png">
  </div>
</section>

<!-- ================= BLADES ================= -->
<section class="fade">
  <h2>⟁ Blades & Weapons</h2>
  <p>Readable silhouettes for combat-focused games.</p>

  <div class="gallery">
    <img class="hero" src="IMAGE_HERO_BLADE.png">
    <img src="IMAGE_BLADE_1.png">
    <img src="IMAGE_BLADE_2.png">
    <img src="IMAGE_BLADE_3.png">
  </div>
</section>

<!-- ================= CONTACT ================= -->
<section class="fade">
  <h2>Get In Touch</h2>
  <p>Open for commissions and collaborations.</p>

  <button onclick="navigator.clipboard.writeText('your@email.com')">
    Copy Email
  </button>
</section>

<button id="topBtn" onclick="window.scrollTo({top:0, behavior:'smooth'})">
  ↑ Top
</button>

<script>
const sections = document.querySelectorAll('.fade');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.2 });

sections.forEach(sec => observer.observe(sec));

window.addEventListener('scroll', () => {
  document.getElementById('topBtn').style.display =
    window.scrollY > 500 ? 'block' : 'none';
});
</script>
