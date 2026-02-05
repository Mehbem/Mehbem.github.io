
const buttons = document.querySelectorAll('.nav button');
const panels = document.querySelectorAll('.panel');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.section;

    panels.forEach(panel => {
      if (panel.id === target) {
        panel.classList.add('active');
        gsap.to(panel, { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' });
      } else {
        panel.classList.remove('active');
        gsap.to(panel, { opacity: 0, x: -50, duration: 0.4 });
      }
    });
  });
});
