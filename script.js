// 헤더 스크롤
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 60) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

// 스크롤 페이드인
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 100);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
