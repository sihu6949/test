// 커스텀 커서
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
if (cursor) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    setTimeout(() => {
      follower.style.left = e.clientX + 'px';
      follower.style.top = e.clientY + 'px';
    }, 80);
  });
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2)';
      follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      follower.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });
}

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
