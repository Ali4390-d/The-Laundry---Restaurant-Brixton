// ============ MOBILE MENU TOGGLE ============
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (nav.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
}

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
      menuToggle.querySelector('i').classList.remove('fa-times');
      menuToggle.querySelector('i').classList.add('fa-bars');
    }
  });
});

// ============ MENU FILTER ============
function filterMenu(event, category) {
  const items = document.querySelectorAll('.menu-item');
  const tabs = document.querySelectorAll('.tab-btn');
  
  tabs.forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');
  
  items.forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

// ============ SCROLL REVEAL ANIMATIONS ============
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

// ============ SUBTLE PARALLAX ON HERO ============
const heroBg = document.querySelector('.hero-bg img');
window.addEventListener('scroll', () => {
  if (window.innerWidth > 768) {
    const offset = window.pageYOffset;
    if (offset < window.innerHeight) {
      heroBg.style.transform = `translateY(${offset * 0.4}px)`;
    }
  }
}, { passive: true });
