/* ═══════════════════════════════════════════════════════════
   MAIN.JS — Choose Your Party
   Navigation, FAQ accordion, scroll animations
═══════════════════════════════════════════════════════════ */

'use strict';

// ─── Footer year ─────────────────────────────────────────
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ─── Nav scroll state ─────────────────────────────────────
const nav = document.getElementById('nav');

function updateNavScroll() {
  if (!nav) return;
  nav.classList.toggle('scrolled', window.scrollY > 20);
}

updateNavScroll();
window.addEventListener('scroll', updateNavScroll, { passive: true });

// ─── Mobile nav ───────────────────────────────────────────
const hamburger  = document.getElementById('nav-hamburger');
const mobileMenu = document.getElementById('nav-mobile');

function openMobileMenu() {
  if (!hamburger || !mobileMenu) return;
  const isOpen = hamburger.getAttribute('aria-expanded') === 'true';

  hamburger.setAttribute('aria-expanded', String(!isOpen));
  mobileMenu.hidden = isOpen;

  if (!isOpen) {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
    // move focus into menu
    const firstLink = mobileMenu.querySelector('a, button');
    if (firstLink) firstLink.focus();
  } else {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.focus();
  }
}

hamburger?.addEventListener('click', openMobileMenu);

// Close mobile menu on link click
mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    mobileMenu.hidden = true;
    hamburger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && hamburger?.getAttribute('aria-expanded') === 'true') {
    openMobileMenu();
  }
});

// ─── Smooth scroll for nav links ──────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navHeight = nav ? nav.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ─── FAQ Accordion ────────────────────────────────────────
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const button = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  if (!button || !answer) return;

  button.addEventListener('click', () => {
    const isOpen = item.getAttribute('data-open') === 'true';

    // Close all other items
    faqItems.forEach(other => {
      if (other !== item) {
        other.setAttribute('data-open', 'false');
        const otherBtn = other.querySelector('.faq-question');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Toggle this item
    item.setAttribute('data-open', String(!isOpen));
    button.setAttribute('aria-expanded', String(!isOpen));
  });

  // Keyboard: allow Space and Enter (already handled by button, but ensure)
  button.addEventListener('keydown', e => {
    if (e.key === 'Home') {
      e.preventDefault();
      faqItems[0]?.querySelector('.faq-question')?.focus();
    }
    if (e.key === 'End') {
      e.preventDefault();
      faqItems[faqItems.length - 1]?.querySelector('.faq-question')?.focus();
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = item.nextElementSibling;
      next?.querySelector('.faq-question')?.focus();
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = item.previousElementSibling;
      prev?.querySelector('.faq-question')?.focus();
    }
  });
});

// ─── Scroll reveal ────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
  );

  revealEls.forEach(el => revealObserver.observe(el));
} else {
  // Fallback: show everything
  revealEls.forEach(el => el.classList.add('visible'));
}

// ─── Pause bokeh when off-screen ─────────────────────────
const heroBokeh = document.querySelector('.hero-bokeh');
const heroSection = document.querySelector('.hero');

if (heroBokeh && heroSection && 'IntersectionObserver' in window) {
  const bokehObserver = new IntersectionObserver(
    ([entry]) => {
      heroBokeh.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
      heroBokeh.querySelectorAll('.bokeh-dot').forEach(dot => {
        dot.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
      });
    },
    { threshold: 0 }
  );
  bokehObserver.observe(heroSection);
}

// ─── Active nav link on scroll ────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links .nav-link');

if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const isActive = link.getAttribute('href') === `#${id}`;
          link.style.color = isActive ? 'var(--white)' : '';
          link.style.setProperty('--link-active', isActive ? '1' : '0');
        });
      });
    },
    { rootMargin: `-${nav?.offsetHeight ?? 72}px 0px -60% 0px` }
  );

  sections.forEach(s => navObserver.observe(s));
}
