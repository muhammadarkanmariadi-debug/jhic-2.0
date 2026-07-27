document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const menu = document.getElementById('mobile-menu');
  const backdrop = document.getElementById('mobile-menu-backdrop');

  const openMenu = () => {
    menu.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    menu.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  menuBtn?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  backdrop?.addEventListener('click', closeMenu);

  // Accordion: cuma 1 submenu yang boleh terbuka
  document.querySelectorAll('.mobile-nav-item').forEach((item) => {
    const toggle = item.querySelector('button.mobile-link-row');
    if (!toggle) return; // skip item tanpa submenu (Beranda)
    toggle.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.mobile-nav-item.open').forEach((el) => {
        el.classList.remove('open');
        el.querySelector('button.mobile-link-row')?.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Sticky Header Shadow & Padding
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 80) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  // Scroll Reveal Animations
  const revealNodes = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealNodes.forEach(node => io.observe(node));
  } else {
    revealNodes.forEach(node => node.classList.add('revealed'));
  }

  // Stats Counter Animation
  const statsSection = document.querySelector('[data-stats]');
  let statsDone = false;

  const animateStats = () => {
    const targets = { siswa: 1000, tahun: 34, mitra: 40 };
    const dur = 1700;
    const start = performance.now();
    const ease = t => 1 - Math.pow(1 - t, 3);
    
    const step = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const e = ease(p);
      Object.keys(targets).forEach(k => {
        const el = document.querySelector(`[data-count="${k}"]`);
        if (el) el.textContent = Math.round(targets[k] * e);
      });
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  if (statsSection && 'IntersectionObserver' in window) {
    const sio = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsDone) {
          statsDone = true;
          animateStats();
          observer.disconnect();
        }
      });
    }, { threshold: 0.35 });
    sio.observe(statsSection);
  } else if (statsSection) {
    animateStats();
  }

  // Programs Tabs Logic
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      
      // Update buttons
      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      
      // Update panels
      tabPanels.forEach(p => p.classList.remove('active'));
      const targetPanel = document.getElementById(targetId);
      if(targetPanel) targetPanel.classList.add('active');
    });
  });

  // News Filter Logic
  const filterBtns = document.querySelectorAll('.filter-btn');
  const newsCards = document.querySelectorAll('.news-grid .news-card');
  const emptyState = document.getElementById('news-empty-state');
  const skeletons = document.getElementById('news-skeletons');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        
        // Update buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Simulate loading
        if (skeletons) {
          newsCards.forEach(card => card.style.display = 'none');
          if (emptyState) emptyState.style.display = 'none';
          skeletons.style.display = 'grid';
          
          setTimeout(() => {
            skeletons.style.display = 'none';
            applyFilter(filter);
          }, 400); // 400ms loading simulation
        } else {
          applyFilter(filter);
        }
      });
    });

    function applyFilter(filter) {
      let visibleCount = 0;
      newsCards.forEach(card => {
        const category = (card.getAttribute('data-category') || '').toLowerCase();
        if (filter === 'all' || filter === category) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });
      
      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    }
  }
  
  // Accordion Logic for FAQ
  const accordions = document.querySelectorAll('.accordion-item');
  accordions.forEach(acc => {
    const header = acc.querySelector('.accordion-header');
    if(header) {
      header.addEventListener('click', () => {
        const isActive = acc.classList.contains('active');
        // Close all
        accordions.forEach(a => a.classList.remove('active'));
        if(!isActive) {
          acc.classList.add('active');
        }
      });
    }
  });

  // --- PHASE 1: ANTI-MONOTON JS UTILITIES ---

  // 1. Tab & Filter Logic
  const amTabBtns = document.querySelectorAll('[data-tab-target]');
  const amTabContents = document.querySelectorAll('[data-tab-content]');
  
  amTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // For Filtering Grid (e.g. Berita, Prestasi)
      const isFilter = btn.hasAttribute('data-filter-group');
      if (isFilter) {
        const group = btn.getAttribute('data-filter-group');
        const targetClass = btn.getAttribute('data-tab-target');
        
        // Active button state
        document.querySelectorAll(`[data-filter-group="${group}"]`).forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter elements
        document.querySelectorAll(`[data-filter-item="${group}"]`).forEach(item => {
          if (targetClass === 'all' || item.classList.contains(targetClass)) {
            item.style.display = '';
            // Trigger reflow for animation if needed
            setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 10);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => { item.style.display = 'none'; }, 300);
          }
        });
        return;
      }

      // For standard Tabs (e.g. Program Detail)
      const targetId = btn.getAttribute('data-tab-target');
      
      // Deactivate all
      amTabBtns.forEach(b => b.classList.remove('active'));
      amTabContents.forEach(c => {
        c.classList.remove('active');
        c.style.display = 'none';
      });
      
      // Activate clicked
      btn.classList.add('active');
      const targetContent = document.getElementById(targetId);
      if(targetContent) {
        targetContent.classList.add('active');
        targetContent.style.display = 'block';
      }
    });
  });

  // 2. Counter Animation
  const counters = document.querySelectorAll('[data-counter]');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const counterIo = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const targetNum = parseInt(el.getAttribute('data-counter'), 10);
          let currentNum = 0;
          const duration = 2000; // 2 seconds
          const increment = targetNum / (duration / 16); // 60fps
          
          const updateCounter = () => {
            currentNum += increment;
            if (currentNum < targetNum) {
              el.innerText = new Intl.NumberFormat('id-ID').format(Math.ceil(currentNum));
              requestAnimationFrame(updateCounter);
            } else {
              el.innerText = new Intl.NumberFormat('id-ID').format(targetNum);
            }
          };
          updateCounter();
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    
    counters.forEach(c => counterIo.observe(c));
  } else {
    counters.forEach(c => c.innerText = new Intl.NumberFormat('id-ID').format(c.getAttribute('data-counter')));
  }

  // 3. Cursor-aware 3D Tilt
  const tiltElements = document.querySelectorAll('[data-tilt]');
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    tiltElements.forEach(el => {
      el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10; // max 10 deg
        const rotateY = ((x - centerX) / centerX) * 10;
        
        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        el.style.transition = 'none';
        el.style.zIndex = '10';
      });
      
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        el.style.transition = 'transform 0.5s ease';
        el.style.zIndex = '1';
      });
    });
  }

  // 4. Marquee Auto-scroll Pause
  const marquees = document.querySelectorAll('[data-marquee]');
  marquees.forEach(marquee => {
    marquee.addEventListener('mouseenter', () => {
      marquee.style.animationPlayState = 'paused';
    });
    marquee.addEventListener('mouseleave', () => {
      marquee.style.animationPlayState = 'running';
    });
  });

  // 5. Progress Bar Animation
  const progressBars = document.querySelectorAll('.demand-bar-fill');
  if ('IntersectionObserver' in window) {
    const progressIo = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const targetWidth = el.getAttribute('data-progress') || el.style.width;
          if (el.getAttribute('data-progress')) {
             el.style.width = targetWidth;
          }
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.2 });
    
    progressBars.forEach(bar => {
      // Set to 0 initially if data-progress exists
      if(bar.getAttribute('data-progress')) {
        bar.style.width = '0%';
      }
      progressIo.observe(bar);
    });
  }

});
