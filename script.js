// ===============================
// HAVEN+ V4 SCRIPT
// Minimalist Power Motion System
// ===============================


// ===============================
// WHATSAPP FORM
// ===============================

function sendWA(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const msg = document.getElementById("msg").value.trim();

  const text = encodeURIComponent(
`Halo Haven+ Team,

Saya ingin mendiskusikan kebutuhan infrastruktur keamanan.

Nama: ${name}
No WhatsApp: ${phone}
Kebutuhan:
${msg}`
  );

  window.open(`https://wa.me/6282170705870?text=${text}`,"_blank");
}



// ===============================
// ANIMATED COUNTER (SMOOTH VERSION)
// ===============================

const counters = document.querySelectorAll('.counter');

const animateCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  const duration = 1200; // total animation time
  const frameRate = 1000 / 60; // 60fps
  const totalFrames = Math.round(duration / frameRate);
  let frame = 0;

  const counterUpdate = () => {
    frame++;
    const progress = frame / totalFrames;
    const current = Math.round(target * easeOutCubic(progress));

    counter.innerText = current;

    if(frame < totalFrames){
      requestAnimationFrame(counterUpdate);
    } else {
      counter.innerText = target;
    }
  };

  counterUpdate();
};

// easing for smoother feel
function easeOutCubic(t){
  return 1 - Math.pow(1 - t, 3);
}


// Trigger counter when visible
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
},{
  threshold:0.6
});

counters.forEach(counter=>{
  counterObserver.observe(counter);
});



// ===============================
// SCROLL REVEAL (REFINED)
// ===============================

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
      revealObserver.unobserve(entry.target);
    }
  });
},{
  threshold:0.15
});

reveals.forEach(el=>{
  revealObserver.observe(el);
});