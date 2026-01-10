/* =========================================================
   CORE SETUP
========================================================= */
gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   CURSOR LIGHT FOLLOW
========================================================= */
const cursor = document.getElementById("cursor-light");

window.addEventListener("mousemove", e => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.25,
    ease: "power2.out"
  });
});

/* =========================================================
   DYNAMIC IMAGE LOADING OPTIMIZATION
========================================================= */
document.querySelectorAll("img").forEach(img => {
  if (img.loading !== "eager") {
    img.loading = "lazy";
  }
  img.decoding = "async";

  if (img.complete) return;

  img.decode?.().catch(() => {});
});

/* =========================================================
   SCROLL-LOCKED ABOUT CINEMATIC
========================================================= */
ScrollTrigger.create({
  trigger: "#about",
  start: "top top",
  end: "+=120%",
  scrub: true,
  pin: true
});

gsap.from("#about h1", {
  y: 120,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from("#about p", {
  y: 60,
  opacity: 0,
  delay: 0.3,
  duration: 1.2,
  ease: "power3.out"
});

/* =========================================================
   SWIPERS
========================================================= */
new Swiper(".cubedSwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  grabCursor: true
});

new Swiper(".bikeSwiper", {
  slidesPerView: 2,
  centeredSlides: true,
  loop: true,
  grabCursor: true
});

/* =========================================================
   SECTION-SPECIFIC CINEMATIC MOTION
========================================================= */

/* ---------- CUBED (GEOMETRIC SNAP) ---------- */
gsap.utils.toArray("#cubed .frame").forEach(frame => {
  gsap.from(frame, {
    scale: 0.6,
    rotateY: 25,
    opacity: 0,
    ease: "back.out(1.6)",
    scrollTrigger: {
      trigger: frame,
      start: "top 85%"
    }
  });
});

/* ---------- MOBS (HEAVY WEIGHT) ---------- */
gsap.utils.toArray("#mobs .frame").forEach(frame => {
  gsap.from(frame, {
    y: 120,
    scale: 0.85,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
      trigger: frame,
      start: "top 80%"
    }
  });
});

/* ---------- BUILDINGS (ASSEMBLY) ---------- */
gsap.utils.toArray("#buildings .frame").forEach((frame, i) => {
  gsap.from(frame, {
    y: 80,
    opacity: 0,
    delay: i * 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#buildings",
      start: "top 75%"
    }
  });
});

/* ---------- BIKES (VELOCITY) ---------- */
gsap.utils.toArray("#bikes .frame").forEach(frame => {
  gsap.from(frame, {
    x: 120,
    skewX: -8,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: frame,
      start: "top 80%"
    }
  });
});

/* ---------- BLADES (IMPACT & RECOIL) ---------- */
gsap.from("#blades .hero-frame", {
  scale: 0.6,
  rotate: -12,
  opacity: 0,
  ease: "elastic.out(1, 0.5)",
  scrollTrigger: {
    trigger: "#blades",
    start: "top 70%"
  }
});

/* =========================================================
   AUTO CINEMATIC CAMERA PANS
========================================================= */
gsap.utils.toArray(".hero-frame").forEach(frame => {
  gsap.fromTo(frame,
    { scale: 1.06 },
    {
      scale: 1,
      scrollTrigger: {
        trigger: frame,
        scrub: true,
        start: "top bottom",
        end: "bottom top"
      }
    }
  );
});

/* =========================================================
   BEFORE / AFTER SLIDERS
========================================================= */
document.querySelectorAll(".compare").forEach(compare => {
  const slider = compare.querySelector("input");
  const after = compare.querySelector(".after");

  slider.addEventListener("input", () => {
    after.style.clipPath = `inset(0 ${100 - slider.value}% 0 0)`;
  });
});

/* =========================================================
   SOUND-REACTIVE HOVER (SIMULATED + MIC OPTIONAL)
========================================================= */
let audioLevel = 0;
let analyser, dataArray;

/* fallback pulse */
function fakeAudioPulse() {
  audioLevel = (Math.sin(Date.now() * 0.003) + 1) * 0.5;
}
fakeAudioPulse();

navigator.mediaDevices?.getUserMedia({ audio: true }).then(stream => {
  const audioCtx = new AudioContext();
  const source = audioCtx.createMediaStreamSource(stream);
  analyser = audioCtx.createAnalyser();
  analyser.fftSize = 64;
  dataArray = new Uint8Array(analyser.frequencyBinCount);
  source.connect(analyser);

  function updateAudio() {
    analyser.getByteFrequencyData(dataArray);
    audioLevel = dataArray.reduce((a, b) => a + b) / dataArray.length / 255;
    requestAnimationFrame(updateAudio);
  }
  updateAudio();
}).catch(() => {
  setInterval(fakeAudioPulse, 100);
});

/* apply sound-reactive hover */
gsap.ticker.add(() => {
  document.querySelectorAll(".frame:hover").forEach(frame => {
    gsap.to(frame, {
      scale: 1 + audioLevel * 0.04,
      filter: `brightness(${1 + audioLevel * 0.3})`,
      duration: 0.2
    });
  });
});

/* =========================================================
   PERFORMANCE SAFETY (LOW-END DEVICES)
========================================================= */
if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
  ScrollTrigger.getAll().forEach(st => st.disable());
  gsap.globalTimeline.timeScale(0.8);
}
