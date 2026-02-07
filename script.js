// Navigation functionality
const navButtons = document.querySelectorAll('.nav-btn');
const ctaButtons = document.querySelectorAll('.cta-btn');
const sections = document.querySelectorAll('.section');

// Combine all navigation triggers
const allNavTriggers = [...navButtons, ...ctaButtons];

allNavTriggers.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetSection = btn.dataset.section;
    
    // Remove active class from all sections
    sections.forEach(section => {
      section.classList.remove('active');
    });
    
    // Add active class to target section
    const target = document.getElementById(targetSection);
    if (target) {
      target.classList.add('active');
      
      // Animate section entrance with GSAP
      gsap.fromTo(target, 
        { 
          opacity: 0, 
          y: 30 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          ease: 'power2.out' 
        }
      );
      
      // Animate subsection cards with stagger
      const cards = target.querySelectorAll('.subsection-card');
      if (cards.length > 0) {
        gsap.fromTo(cards,
          {
            opacity: 0,
            y: 20
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 0.2
          }
        );
      }

      // Scroll to top smoothly
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  });
});

// Add hover animations to subsection links
const subsectionLinks = document.querySelectorAll('.subsection-link');

subsectionLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    gsap.to(link, {
      x: 5,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
  
  link.addEventListener('mouseleave', () => {
    gsap.to(link, {
      x: 0,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
});

// Animate project cards on hover
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      scale: 1.02,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
  
  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
});

// Initial page load animation
window.addEventListener('load', () => {
  // Animate home section elements
  const homeSection = document.getElementById('home');
  if (homeSection.classList.contains('active')) {
    gsap.fromTo('.main-title',
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.2 }
    );
    
    gsap.fromTo('.title-accent',
      { width: 0 },
      { width: 120, duration: 0.6, ease: 'power2.out', delay: 0.5 }
    );
    
    gsap.fromTo('.lead-text, .institution',
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.7 }
    );
    
    gsap.fromTo('.specialty-tag',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: 'back.out(1.7)', delay: 1 }
    );
    
    gsap.fromTo('.home-description',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 1.2 }
    );
    
    gsap.fromTo('.cta-btn',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out', delay: 1.4 }
    );
    
    gsap.fromTo('.photo-placeholder',
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out', delay: 0.5 }
    );
    
    gsap.fromTo('.photo-accent',
      { opacity: 0, x: -30, y: -30 },
      { opacity: 1, x: 0, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.8 }
    );
  }
});

// Add subtle parallax effect to photo accent
window.addEventListener('mousemove', (e) => {
  const photoAccent = document.querySelector('.photo-accent');
  if (photoAccent) {
    const moveX = (e.clientX * -0.01);
    const moveY = (e.clientY * -0.01);
    
    gsap.to(photoAccent, {
      x: moveX,
      y: moveY,
      duration: 0.5,
      ease: 'power2.out'
    });
  }
});

// Highlight active nav button based on current section
function updateActiveNavButton() {
  const activeSection = document.querySelector('.section.active');
  if (activeSection) {
    const activeSectionId = activeSection.id;
    
    navButtons.forEach(btn => {
      if (btn.dataset.section === activeSectionId) {
        btn.style.color = 'var(--primary)';
      } else {
        btn.style.color = 'var(--text-secondary)';
      }
    });
  }
}

// Call on page load and after navigation
window.addEventListener('load', updateActiveNavButton);
allNavTriggers.forEach(btn => {
  btn.addEventListener('click', () => {
    setTimeout(updateActiveNavButton, 100);
  });
});
