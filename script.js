// Navigation functionality
const navButtons = document.querySelectorAll('.nav-btn');
const ctaButtons = document.querySelectorAll('.cta-btn');
const dataSectionLinks = document.querySelectorAll('[data-section]:not(.nav-btn):not(.cta-btn)');
const sections = document.querySelectorAll('.section');

// Combine all navigation triggers
const allNavTriggers = [...navButtons, ...ctaButtons, ...dataSectionLinks];

allNavTriggers.forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (btn.tagName === 'A') e.preventDefault();
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
    const moveX = (e.clientX * 0.02);
    const moveY = (e.clientY * 0.05);
    
    gsap.to(photoAccent, {
      x: moveX,
      y: moveY,
      duration: 0.5,
      ease: 'power2.out'
    });
  }
});

// Add subtle parallax effect to photo accent
window.addEventListener('mousemove', (e) => {
  const photoAccent = document.querySelector('.about-photo .photo-accent');
  if (photoAccent) {
    const moveX = (e.clientX * 0.02);
    const moveY = (e.clientY * 0.05);
    
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
  btn.addEventListener('click', (e) => {
    if (btn.tagName === 'A') e.preventDefault();
    setTimeout(updateActiveNavButton, 100);
  });
});



// ===== LIVE AGE TIMER (About section) =====
(function () {
  const el = document.getElementById('age-timer');
  if (!el) return;

  // Birth: July 12, 2005 at 11:00 AM America/New_York
  const birth = new Date('2005-07-12T11:00:00-04:00');

  function addYears(date, years) {
    const d = new Date(date.getTime());
    d.setFullYear(d.getFullYear() + years);
    return d;
  }

  function updateAgeTimer() {
    const now = new Date();

    let years = 0;
    while (addYears(birth, years + 1) <= now) years++;

    const afterYears = addYears(birth, years);
    let remainingMs = now - afterYears;

    const msPerSecond = 1000;
    const msPerMinute = msPerSecond * 60;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;

    const days = Math.floor(remainingMs / msPerDay);
    remainingMs -= days * msPerDay;

    const hours = Math.floor(remainingMs / msPerHour);
    remainingMs -= hours * msPerHour;

    const minutes = Math.floor(remainingMs / msPerMinute);
    remainingMs -= minutes * msPerMinute;

    const seconds = Math.floor(remainingMs / msPerSecond);

    const pad2 = (n) => String(n).padStart(2, '0');

    el.textContent = `${years} years, ${days} days, ${hours}h ${pad2(minutes)}m ${pad2(seconds)}s`;
  }

  updateAgeTimer();
  setInterval(updateAgeTimer, 1000);
})();

// ===== HOME PHOTO AUTO ROTATION =====
(function () {
  const photos = document.querySelectorAll('#home .profile-photo');
  if (!photos.length) return;

  let current = 0;

  setInterval(() => {
    photos[current].classList.remove('active');
    current = (current + 1) % photos.length;
    photos[current].classList.add('active');
  }, 4000); // 5 seconds
})();

// ===== ABOUT PHOTO AUTO ROTATION =====
(function () {
  const photos = document.querySelectorAll('#about .profile-photo');
  if (!photos.length) return;

  let current = 0;

  setInterval(() => {
    photos[current].classList.remove('active');
    current = (current + 1) % photos.length;
    photos[current].classList.add('active');
  }, 4000);
})();

// ===== PORTFOLIO: TILE -> SCROLL TO DETAIL =====
(function () {
  const tiles = document.querySelectorAll('.project-tile[data-project-target]');
  if (!tiles.length) return;

  tiles.forEach(tile => {
    tile.addEventListener('click', () => {
      const targetId = tile.dataset.projectTarget;
      if (!targetId) return;

      const target = document.getElementById(targetId);
      if (!target) return;

      // subtle highlight on the selected detail section
      document.querySelectorAll('.project-detail').forEach(el => el.classList.remove('is-highlight'));
      target.classList.add('is-highlight');

      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();





// ===== LIGHTBOX: CLICK ANY PORTFOLIO IMAGE TO ENLARGE =====
(function () {
  function initLightbox(){
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const imgEl = lightbox.querySelector('.lightbox-img');
    const capEl = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    if (!imgEl || !capEl || !closeBtn) return;

    function openLightbox(src, alt) {
      imgEl.src = src;
      imgEl.alt = alt || 'Expanded image';
      capEl.textContent = alt || '';
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      imgEl.src = '';
      imgEl.alt = '';
      capEl.textContent = '';
    }

    // Delegate clicks (works even if images load later)
    document.addEventListener('click', (e) => {
      const img = e.target.closest('.project-gallery img');
      if (!img) return;
      openLightbox(img.currentSrc || img.src, img.alt);
    });

    // Keyboard accessibility: focusable images
    document.querySelectorAll('.project-gallery img').forEach((img) => {
      img.style.cursor = 'zoom-in';
      if (!img.hasAttribute('tabindex')) img.setAttribute('tabindex', '0');
      if (!img.hasAttribute('role')) img.setAttribute('role', 'button');
      img.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(img.currentSrc || img.src, img.alt);
        }
      });
    });

    closeBtn.addEventListener('click', closeLightbox);

    // Click outside figure closes
    lightbox.addEventListener('click', (e) => {
      const fig = lightbox.querySelector('.lightbox-figure');
      if (fig && !fig.contains(e.target)) closeLightbox();
    });

    // ESC closes
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
    });
  }

  try{
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initLightbox);
    } else {
      initLightbox();
    }
  } catch(err){
    console.error('Lightbox init failed:', err);
  }
})();

// ===== HOME: "LAST EDITED" + LIVE CLOCK =====
(function () {
  const lastEl = document.getElementById('last-edited-ts');
  const clockEl = document.getElementById('live-clock');
  if (!lastEl || !clockEl) return;

  // document.lastModified is provided by the browser based on the served file timestamp
  // (updates when you redeploy and the page is reloaded)
  const lm = new Date(document.lastModified);
  const lastEditedText = isNaN(lm.getTime())
    ? 'unknown'
    : lm.toLocaleString([], { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' });

  lastEl.textContent = lastEditedText;

  function updateClock() {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }

  updateClock();
  setInterval(updateClock, 1000);
})();