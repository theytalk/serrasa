// SMOOTH SCROLL + OFFSET HEADER
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();
    const header = document.querySelector('header');
    const offset = header ? header.offsetHeight : 0;
    const y = target.getBoundingClientRect().top + window.scrollY - offset - 10;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});

// SCROLL REVEAL (SEMUA ELEMEN)
const reveals = document.querySelectorAll(
  'section, .kopi-card, img, .logo'
);

reveals.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'opacity .7s ease, transform .7s ease';
});

const revealOnScroll = () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// HERO TEXT FADE ONLY (NO TRANSFORM)
const heroText = document.querySelector('.hero-text');
if(heroText){
  heroText.style.opacity = 0;
  heroText.style.transition = 'opacity .8s ease';
  window.addEventListener('load', ()=>{
    heroText.style.opacity = 1;
  });
}

// HERO PARALLAX DIMATIKAN
const heroImg = document.querySelector('.hero img');
if(heroImg){
  heroImg.style.transform = 'scale(1.08)';
}

// PROGRESS BAR AT TOP
const progress = document.createElement('div');
progress.style.cssText = `
  position:fixed; top:0; left:0; height:3px; width:0;
  background:#c27c5c; z-index:9999;
`;
document.body.appendChild(progress);

window.addEventListener('scroll', () => {
  const max =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  progress.style.width = (window.scrollY / max) * 100 + '%';
});

// CARD HOVER (SMOOTH + HD)
document.querySelectorAll('.kopi-card').forEach(card => {
  card.style.transition = 'transform .35s ease, box-shadow .35s ease';

  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px) scale(1.04)';
    card.style.boxShadow = '0 25px 50px rgba(0,0,0,.25)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'none';
    card.style.boxShadow = '0 2px 5px rgba(0,0,0,.1)';
  });
});


// IMAGE HOVER SHARPEN (HD ILLUSION)
document.querySelectorAll('img').forEach(img => {
  img.style.transition = 'filter .3s ease, transform .3s ease';
  img.addEventListener('mouseenter', () => {
    img.style.filter = 'contrast(1.05) saturate(1.1)';
    img.style.transform = 'scale(1.02)';
  });
  img.addEventListener('mouseleave', () => {
    img.style.filter = 'none';
    img.style.transform = 'none';
  });

  // HOVER TILT (SUBTLE)
document.querySelectorAll('.kopi-card').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const x=e.clientX-r.left, y=e.clientY-r.top;
    const rx=-(y-r.height/2)/18;
    const ry=(x-r.width/2)/18;
    card.style.transform=
      `translateY(-8px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  card.addEventListener('mouseleave',()=>{
    card.style.transform='translateY(0) rotateX(0) rotateY(0)';
  });
});

document.querySelectorAll('.order-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const produk = btn.dataset.produk;
    const pesan = `Halo Serrasa Kopi, saya mau pesan ${produk}.`;
    const nomor = '+62895330774175'; // GANTI NOMOR

    window.open(
      `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`,
      '_blank'
    );
  });
});
});
